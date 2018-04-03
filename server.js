const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("./passport");
const mongoose = require("mongoose");

//Import Twilio and import keys module to have access to Twilio
const keys = require("./twilioKeys");
var twilio = require('twilio');
var client = new twilio(keys.sid, keys.token);


// const dbConnection = require("./db");

const PORT = process.env.PORT || 3001;
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MediHelperDB",
  {
    useMongoClient: true
  }
);

// ======== Middleware =========
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.APP_SECRET || "this is the default passphrase",
  // store: new MongoStore({mongooseConnection: dbConnection}),
  resave: false,
  saveUninitialized: false
}));


// ======== Passport ===========
app.use(passport.initialize());
app.use(passport.session());

// Express app ROUTING 
app.use("/auth", require("./auth"));

//======== Twilio ========
app.post('/sendsms', (req, res) => {
  console.log(req.body);
  client.messages.create({
    to: req.body.data,
    from: keys.twilioNumber,
    body: "Your patient needs help! Please assist!"
  }, function (err, responseData) {
    console.log(err + "here");
  });
});


// ======== Error handler =========
app.use(function(err, req, res, next) {
  console.log("====== ERROR ======");
  console.error(err.stack);
  res.status(500);
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
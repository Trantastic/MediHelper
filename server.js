const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("./passport");
const mongoose = require("mongoose");

//Import keys module to have access to Twilio
const keys = require("./twilioKeys");

// const dbConnection = require("./db");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/MediHelperDB");

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
app.post('/sendsms', bodyParser.json(), (req, res) => {
  var client = require('twilio')(keys.sid, keys.token);
  client.sendMessage({
    to: req.body.data,
    from: keys.twilioNum,
    body: "Your patient needs help! Please assist!"
  }, function (err, responseData) {
    if (!err) {
      res.json({"From": responseData.from, "Body": responseData.body});
    }
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

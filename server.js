const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-select")(session);
const passport = require("./passport");
const mongoose = require("mongoose");
// const dbConnection = require("./db");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.Promise = global.Promise;
let MONGO_URL;
const MONGO_LOCAL_URL = "mongo://localhost/mern-password";

if (process.env.MONGO_URI) {
	mongoose.connect(process.env.MONGO_URI);
} else {
	mongoose.connect(MONGO_LOCAL_URL);
	MONGO_URL = MONGO_LOCAL_URL;
}

const db = mongoose.connection;

db.on("error", err => {
	console.log(`There was an error connection to the database: ${err}`);
});

db.once("open", () => {
	console.log(`You have successfully connected to your mongo database: ${MONGO_URL}`);
});



// ======== Middleware =========
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
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

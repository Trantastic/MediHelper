const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/MediHelperDB");
// mongoose.Promise = global.Promise;
// let MONGO_URL;
// const MONGO_LOCAL_URL = "mongo://localhost/MediHelperDB";

// if (process.env.MONGO_URI) {
// 	mongoose.connect(process.env.MONGO_URI);
// } else {
// 	mongoose.connect(MONGO_LOCAL_URL);
// 	MONGO_URL = MONGO_LOCAL_URL;
// }

// const db = mongoose.connection;

// db.on("error", err => {
// 	console.log(`There was an error connection to the database: ${err}`);
// });

// db.once("open", () => {
// 	console.log(`You have successfully connected to your mongo database: ${MONGO_URL}`);
// });

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
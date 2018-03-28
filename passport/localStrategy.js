const db = require("../models")
const LocalStrategy = require("passport-local").Strategy

const strategy = new LocalStrategy(
	
	function(username, password, done) {
		db.Caretaker.findOne({ "local.username": username }, (err, caretakerMatch) => {
			if (err) {
				return done(err);
			}
			if (!caretakerMatch) {
				return done(null, false, { message: "Incorrect username" });
			}
			if (!caretakerMatch.checkPassword(password)) {
				return done(null, false, { message: "Incorrect password" });
			}
			return done(null, caretakerMatch);
		})
	}
)

module.exports = strategy
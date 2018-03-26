const Caretaker = require("../models")
const LocalStrategy = require("passport-local").Strategy

const strategy = new LocalStrategy(
	{
		username: "username" // not necessary, DEFAULT
	},
	function(username, password, done) {
		User.findOne({ "local.username": username }, (err, caretakerMatch) => {
			if (err) {
				return done(err);
			}
			if (!userMatch) {
				return done(null, false, { message: "Incorrect username" });
			}
			if (!userMatch.checkPassword(password)) {
				return done(null, false, { message: "Incorrect password" });
			}
			return done(null, caretakerMatch);
		})
	}
)

module.exports = strategy
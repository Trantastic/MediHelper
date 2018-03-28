const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const db = require("../models");

passport.serializeUser((caretaker, done) => {
	console.log('=== serialize ... called ===')
	done(null, { _id: caretaker._id })
})

passport.deserializeUser((id, done) => {
	console.log('Deserialize ... called')
	console.log();
	db.Caretaker.findOne(
		{ _id: id },
		'username phoneNumb local.username',
		(err, caretaker) => {
			console.log('======= DESERILAIZE CARETAKER CALLED ======')
			console.log(caretaker)
			console.log('--------------')
			done(null, false);
		}
	)
})

// ==== Register Strategies ====
passport.use(LocalStrategy);

module.exports = passport
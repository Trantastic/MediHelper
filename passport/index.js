const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const db = require("../models");

passport.serializeUser((careTaker, done) => {
	console.log('=== serialize ... called ===')
	console.log(db.caretaker) // the whole raw user object!
	console.log('---------')
	done(null, { _id: caretaker._id })
})

passport.deserializeUser((id, done) => {
	console.log('DEserialize ... called')
	db.Caretaker.findOne(
		{ _id: id },
		'firstName lastName photos local.username',
		(err, caretaker) => {
			console.log('======= DESERILAIZE CARETAKER CALLED ======')
			console.log(caretaker)
			console.log('--------------')
			done(null, caretaker)
		}
	)
})

// ==== Register Strategies ====
passport.use(LocalStrategy);

module.exports = passport
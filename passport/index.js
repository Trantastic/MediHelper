const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const Caretaker = require("../db/models/caretaker");

passport.serializeUser((careTaker, done) => {
	console.log('=== serialize ... called ===')
	console.log(caretaker) // the whole raw user object!
	console.log('---------')
	done(null, { _id: caretaker._id })
})

passport.deserializeUser((id, done) => {
	console.log('DEserialize ... called')
	User.findOne(
		{ _id: id },
		'firstName lastName photos local.username',
		(err, careTaker) => {
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
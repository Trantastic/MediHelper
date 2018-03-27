const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require("../passport");


router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ caretaker: req.user });
	} else {
		return res.json({ caretaker: null });
	}
});

router.post("/login", function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate("local"), (req, res) => {
		console.log("POST to /login")
		const Caretaker = JSON.parse(JSON.stringify(req.db.Caretaker)); // hack
		const cleanCaretaker = Object.assign({}, db.Caretaker)
		if (cleanCaretaker.local) {
			console.log(`Deleting ${cleanCaretaker.local.password}`);
			delete cleanCaretaker.local.password
		}
		res.json({ caretaker: cleanCaretaker });
	}
);

router.post("/logout", (req, res) => {
	if (req.db.Caretaker) {
		req.session.destroy();
		res.clearCookie('connect.sid'); // clean up!
		return res.json({ msg: 'logging you out' });
	} else {
		return res.json({ msg: 'no caretaker to log out!' });
	}
});

router.post("/signup", (req, res) => {
	
	console.log(req.body)
	const { username, password } = req.body
	// ADD VALIDATION
	db.Caretake.findOne({ "local.username": username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({error: `Sorry, already a caretaker with the username: ${username}`});
		}
		const newCaretake = new db.Caretaker({
			
			"local.username": username,
			"local.password": password
		});
		newCaretake.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser);
		});
	});
});

module.exports = router
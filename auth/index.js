const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require("../passport");


router.get('/user', (req, res, next) => {
	if (req.user) {
		return res.json({ caretaker: req.user });
	} else {
		return res.json({ caretaker: null });
	}
});

// grabs user data and authenticate the login in  
router.post("/login", function(req, res, next) {
		next()
	},
	passport.authenticate("local"), (req, res) => {

		const Caretaker = JSON.parse(JSON.stringify(req.user));
		const cleanCaretaker = Object.assign({}, Caretaker)
		if (cleanCaretaker.local) {
			delete cleanCaretaker.local.password
		}
		res.json({ caretaker: cleanCaretaker });
	}
);

// destroys the user session and logs them out
router.post("/logout", (req, res) => {
	if (req.user) {
		req.session.destroy();
		res.clearCookie('connect.sid'); // clears the cookie
		return res.json({ msg: 'logging you out' });
	} else {
		return res.json({ msg: 'no caretaker to log out!' });
	}
});

// creates the user and saves the users input to the database
router.post("/signup", (req, res) => {
	db.Caretaker.create({
		"local.username": req.body.username,
		 username : req.body.username,
     phoneNumb: req.body.phoneNumb,
     "local.password": req.body.password,
		 password: req.body.password
   }).then(function(caretakerDB) {
   	res.json(caretakerDB);
   }); 
});

module.exports = router
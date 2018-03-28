const db = require("../models");

module.exports = {
	create: function(req, res) {
		console.log("Controller ", req.body);
		db.Patient
		.create(req.body)
		.then(dbModel => console.log("controller dbmodel: ", dbModel))
		.catch(err => res.status(422).json(err));
	},
	findAll: function(req, res) {
		db.Patient
			.find(req.query)
			.then(dbModel => console.log("controller dbmodel: ", dbModel))
			.catch(err => res.status(422).json(err));
	}
};
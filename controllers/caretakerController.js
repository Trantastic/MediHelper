const db = require("../models");

module.exports = {
	// Creates entry of patient into mongoDB
	create: function(req, res) {
		db.Patient
		.create(req.body)
		.then(dbModel => console.log("controller dbmodel: ", dbModel))
		.catch(err => res.status(422).json(err));
	},
	// Finds all patients for the caretaker that logs in
	findAll: function(req, res) {
		db.Patient
			.find(req.query)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		console.log("controler", req.params);
		db.Patient
			.findById({_id: req.params.id})
			.then(dbModel => dbModel.remove())
			.then(dbModel => console.log("dbmodel ", dbModel))
			.catch(err => res.status(422).json(err));
	}
};
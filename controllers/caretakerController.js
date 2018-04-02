const db = require("../models");

module.exports = {
	// Creates entry of patient into mongoDB
	create: function(req, res) {
		db.Patient
		.create(req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	},
	// Finds all patients for the caretaker that logs in
	findById: function(req, res) {
		db.Caretaker
			.findById({_id: req.params.id})
			.populate("patient")
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	// findAll: function(req, res) {
	// 	db.Patient
	// 		.find(req.query)
	// 		.then(dbModel => res.json(dbModel))
	// 		.catch(err => res.status(422).json(err));
	// },
	remove: function(req, res) {
		db.Patient
	      .findById({_id: req.params.id})
	      .then(dbModel => dbModel.remove())
	      .then(dbModel => res.json(dbModel))
	      .catch(err => res.status(422).json(err));
	},
	findOne: function(req, res) {
		db.Caretaker
		    .findById({_id: req.params.id})
		    .populate('patient')
		    .exec(function(err, caretaker) {
		    	console.log(JSON.stringify(caretakers, null, "\t"))
		    })
	}
};




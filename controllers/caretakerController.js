const db = require("../models");

module.exports = {
	// Creates entry of patient into database and if successful pushes ID of patient into Caretaker
	create: function(req, res) {
		db.Patient
		.create(req.body)
		.then(dbModel => {return db.Caretaker.findOneAndUpdate({}, {$push: {patient: dbModel._id}}, {new: true}) })
		.catch(err => res.status(422).json(err));
	},
	// Finds specific patient from databse
	findOne: function(req, res) {
		db.Patient
			.find({_id: req.params.id})
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
	// Finds all patients from databse
	// findAll: function(req, res) {
	// 	db.Patient
	// 		.find(req.query)
	// 		.then(dbModel => res.json(dbModel))
	// 		.catch(err => res.status(422).json(err));
	// },
	// Deletes specified patient from database
	remove: function(req, res) {
		console.log("controller ", req.params.id);
		db.Patient
	      .findById({_id: req.params.id})
	      .then(dbModel => dbModel.remove())
	      .then(dbModel => res.json(dbModel))
	      .catch(err => res.status(422).json(err));
	},
	// Updates specificied patient from database
	update: function(req, res) {
		db.Patient
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
      		.catch(err => res.status(422).json(err));
	}
};
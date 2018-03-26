const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	address: {type: String, required: true},
	address2: {type: String},
	city: {type: String, required: true},
	state: {type: String, required: true},
	zip: {type: String, required: true},
	language: {type: String, required: true},
	medicalCond: {type: String, required: true},
	medication: {type: String},
	allergies: {type: String},
	notes: {type: String},
	primaryCareName: {type: String},
	primaryCareNumber: {type: String},
	contactFirstName: {type: String, required: true},
	contactLastName: {type: String, required: true},
	contactRelationship: {type: String, required: true},
	contactNumb: {type: String, required: true}
})

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
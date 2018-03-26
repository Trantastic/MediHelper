const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const caretakerSchema = new Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
})

const Caretaker = mongoose.model("Caretaker", caretakerSchema);

module.export = Caretaker;
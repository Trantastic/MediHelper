const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const caretakerSchema = new Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
	phoneNum: {type: String, required: true},
	patient: {type: Schema.Types.ObjectId, ref: "Patient"}
})


const Caretaker = mongoose.model("Caretaker", caretakerSchema);

module.export = Caretaker;
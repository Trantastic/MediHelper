const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
	eventTitle: {type: String, required: true},
	startDate: {type: String, required: true},
	startTime: {type: String, required: false},
	endDate: {type: String, required: false},
	endTime: {type: String, required: false},
	rePatient: {type: String, required: false},
	description: {type: String, required: false},
})

const Event = mongoose.model("Event", calendarSchema);

module.exports = Event;
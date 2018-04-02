const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const caretakerSchema = new Schema({
	username: {type: String, unique: true, required: true},
	phoneNumb: {type: String, required: true},
	password: {type: String, required: true},
	local: {
		username: {type: String, unique: true},
		password: {type: String, unique: true}
	},

	patient: [{
		type: Schema.Types.ObjectId,
		ref: "Patient"
	}]
});

caretakerSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.local.password);
	}, 
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10);
	}
};

caretakerSchema.pre("save", function(next) {
	if (!this.local.password) {
		console.log("=====NO PASSWORD PROVIDED======");
		next();
	} else {
		this.local.password = this.hashPassword(this.local.password);
		next();
	}
});

const Caretaker = mongoose.model("Caretaker", caretakerSchema);

module.exports = Caretaker;
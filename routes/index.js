const router = require("express").Router();
const caretakerController = require("../controllers/caretakerController");
const path = require("path");

router.route("/api/patient")
	.post(caretakerController.create)
	.get(caretakerController.findById);	

router.route("/api/patient/:id")
	.get(caretakerController.findOne)
	.delete(caretakerController.remove)
	.put(caretakerController.update);	

module.exports = router;
const router = require("express").Router();
const caretakerController = require("../controllers/caretakerController");
const path = require("path");

router.route("/api/patient")
	.post(caretakerController.create);
	// .get(caretakerController.findAll);	

router.route("/api/patient/:id")
	.get(caretakerController.findById);

router.route("api/patient/:id")
	.delete(caretakerController.remove);	

module.exports = router;
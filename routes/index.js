const router = require("express").Router();
const caretakerController = require("../controllers/caretakerController");
const path = require("path");

router.route("/api/patient")
	.post(caretakerController.create);
	// .get(caretakerController.findAll);

router.route("/api/patient/:id")
	.delete(caretakerController.remove);	

router.route("/api/patient")
	.get(caretakerController.findById);

router.route("api/patient/:id")
	.delete(caretakerController.remove);	

router.route("api/patient/:id")
	.put(caretakerController.update);

module.exports = router;
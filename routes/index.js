const router = require("express").Router();
const caretakerController = require("../controllers/caretakerController");
const path = require("path");

router.route("/api/patient")
	.post(caretakerController.create)
	.get(caretakerController.findAll);

module.exports = router;
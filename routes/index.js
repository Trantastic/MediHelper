const router = require("express").Router();
const caretakerController = require("../controllers/caretakerController");
const path = require("path");

// Creates document of patient in MongoDB
router.route("/api/patient").post(caretakerController.create);

module.exports = router;
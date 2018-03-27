const router = require("express").Router();
const caretakerController = require("../../controllers/caretakerController");

router.route("/api/patient").post(caretakerController.create);


module.exports = router;
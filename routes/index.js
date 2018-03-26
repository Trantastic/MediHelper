const router = require("express").Router();
// require controller file

router.route("/api/patient").post(caretakerController.create);


module.exports = router;


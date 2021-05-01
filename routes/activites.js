const express = require("express");
const router = express.Router();

const activityCtrl = require("../controller/activites");

router
  .route("/")
  .get(activityCtrl.getAllActivities)
  .post(activityCtrl.createActivity);

  module.exports = router;
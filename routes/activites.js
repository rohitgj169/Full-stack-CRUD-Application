const express = require("express");
const router = express.Router();

const activityCtrl = require("../controller/activites");

router
  .route("/")
  .get(activityCtrl.getAllActivities)
  .post(activityCtrl.createActivity);

router
  .route("/:id")
  .get(activityCtrl.getActivity)
  .patch(activityCtrl.updateActivity)
  .delete(activityCtrl.deleteActivity);

module.exports = router;

const express = require("express");
const router = express.Router();

const activityCtrl = require("../controller/activites");

router.get('/show', activityCtrl.getAllActivities);
router.get('/new', activityCtrl.newActivity);
router.post('/', activityCtrl.createActivity);
module.exports = router;

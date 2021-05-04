const express = require("express");
const router = express.Router();

const activityCtrl = require("../controller/activites");

router.get('/', activityCtrl.getAllActivities);
router.get('/new', activityCtrl.newActivity);
router.get('/:id',activityCtrl.getActivity);
router.get('/:id/edit',activityCtrl.editActivity)
router.post('/', activityCtrl.createActivity);
router.delete('/:id',activityCtrl.deleteActivity);
router.put('/:id',activityCtrl.updateActivity)

module.exports = router;

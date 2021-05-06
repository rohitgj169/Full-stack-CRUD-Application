const Activity = require("../models/activity");
const User = require("../models/user");

const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).render("activities/index", {
      results: activities.length,
      activities,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const getActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id).populate("members");
    const users = await User.find({}).where("_id").nin(activity.members);
    res.status(200).render("activities/show", {
      activity,
      users,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const createActivity = async (req, res) => {
  try {
    const newActivity = await Activity.create(req.body);
    const activity = await newActivity.save();
    res.status(201).redirect("/activities");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const updateActivity = async (req, res) => {
  try {
    const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).redirect("/activities");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const deleteActivity = async (req, res) => {
  try {
    await Activity.findByIdAndDelete(req.params.id);
    res.status(204).redirect("/activities");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const newActivity = (req, res) => {
  res.render("activities/new");
};

const editActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    res.render("activities/edit", {
      activity,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const addToActivity = async (req, res) => {
  try {
    let activity = await Activity.findById(req.params.id);
    activity.members.push(req.body.userId);
    await activity.save();
    res.status(200).redirect(`/activities/${activity._id}`);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const deleteFromActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    const idx = activity.members.indexOf(req.params.userId);
    if (idx > -1) {
      activity.members.splice(idx, 1);
    } else {
      throw new Error("User not found in activity");
    }
    await activity.save();
    res.status(204).redirect(`/activities/${activity._id}`);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = {
  getAllActivities,
  getActivity,
  createActivity,
  updateActivity,
  deleteActivity,
  newActivity,
  editActivity,
  addToActivity,
  deleteFromActivity,
};

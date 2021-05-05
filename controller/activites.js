const Activity = require("../models/activity");

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
    const activity = await Activity.findById(req.params.id);
    res.status(200).render("activities/show", {
      activity,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
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
  const activity = await Activity.findById(req.params.id);
  res.render("activities/edit", {
    activity,
  });
};

module.exports = {
  getAllActivities,
  getActivity,
  createActivity,
  updateActivity,
  deleteActivity,
  newActivity,
  editActivity,
};

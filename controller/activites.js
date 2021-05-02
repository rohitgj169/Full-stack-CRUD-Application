const Activity = require("../models/activity");
const SearchFeatures = require("../utils/searchFeatures");

const getAllActivities = async (req, res) => {
  try {
    const features = new SearchFeatures(Activity.find(), req.query)
      .filter()
      .sort()
      .paginate();

    const activities = await features.query;
    res.status(200).json({
      status: "success",
      results: activities.length,
      data: {
        activities,
      },
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
    res.status(200).json({
      status: "success",
      data: {
        activity,
      },
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
    res.status(201).json({
      status: "success",
      data: {
        activity: newActivity,
      },
    });
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
    res.status(200).json({
      status: "success",
      data: {
        activity,
      },
    });
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
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  getAllActivities,
  getActivity,
  createActivity,
  updateActivity,
  deleteActivity,
};

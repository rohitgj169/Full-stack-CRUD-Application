const Activity = require("../models/activity");

const createComment = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    activity.comments.push(req.body);
    await activity.save();
    res.status(200).redirect(`/activities/${activity._id}`);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    const activity = await Activity.findOne({
      "comments._id": req.params.id,
    });
    activity.comments.remove(req.params.id);
    await activity.save();
    res.status(204).redirect(`/activities/${activity._id}`);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  createComment,
  deleteComment,
};

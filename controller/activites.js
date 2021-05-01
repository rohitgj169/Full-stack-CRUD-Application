const Activity = require("../models/activity");

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

module.exports = {
  createActivity,
};

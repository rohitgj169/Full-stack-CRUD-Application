const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  name: {
    type: String,
    min: 10,
    trim: true,
    required: [true, "Activity needs a name"],
  },
  type: {
    type: String,
    enum: ["indoor", "outdoor"],
    required: [true, "Activity needs a type"],
  },
  location: {
    type: String,
    min: 10,
  },
  experienceLevel: {
    type: String,
    enum: ["novice", "intermediate", "expert"],
    required: [true, "Activity needs an Experience Level"],
  },
  duration: {
    type: Number,
    required: [true, "Activity needs a duration"],
  },
  slots: {
    type: Number,
    required: [true, "Activity needs number of slots"],
  },
  reviewAverage: {
    type: Number,
    default: 2.5,
  },
  reviewCount: {
    type: Number,
    default: 0,
  },
  summary: {
    type: String,
    trim: true,
    required: [true, "Acitivity needs a summary"],
  },
  description: {
    type: String,
    trim: true,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Activity", activitySchema);

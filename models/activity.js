const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  name: {
    type: String,
    min: 10,
    required: [true, "Activity needs a name"]
  },
  type: {
    type: String,
    enum: ["Indoor", "Outdoor"],
    required: [true, "Activity needs a type"]
  },
  location: {
      type: String,
      min: 10,
  },
  experienceLevel: {
      type: String,
      enum: ["Novice", "Intermediate", "Expert"],
      required: [true, "Activity needs an Experience Level"]
  },
  averageDuration: {
    type: Number,
  }
});

module.exports = mongoose.model("Activity", activitySchema);

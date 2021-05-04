const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Activity needs a title"],
  },
  description: {
    type: String,
    trim: true,
    required: [true, "Activity needs a description"],
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Activity", activitySchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comment: {
      type: String,
    },
    activity: {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
  },
  {
    timestamps: true,
  }
);

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

  comments: [commentSchema],

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

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  rating: {
    type: Number,
    required: [true, "Please enter a rating"],
  },
  comments: {
    type: String,
  },
  activity: {
    type: Schema.Types.ObjectId,
    ref: "Activity",
  },
});

module.exports = mongoose.model("Review", reviewSchema);

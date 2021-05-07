const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
  },
});

module.exports = mongoose.model("User", userSchema);

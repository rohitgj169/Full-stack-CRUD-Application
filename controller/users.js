const User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).render("users/index", {
      users,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    await newUser.save();
    res.status(201).redirect("/users");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const newUser = (req, res) => {
  res.render("users/new");
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(204).redirect("/users");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  newUser,
  deleteUser,
};

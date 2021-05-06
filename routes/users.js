const express = require("express");
const userCtrl = require("../controller/users");

const router = express.Router();

router.get("/", userCtrl.getAllUsers);
router.get("/new", userCtrl.newUser);
router.post("/", userCtrl.createUser);
router.delete('/:id',userCtrl.deleteUser);
module.exports = router;

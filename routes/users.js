const express = require("express");
const userCtrl = require('../controller/users');

const router = express.Router();

router.get('/', userCtrl.getAllUsers);
router.get('/new', userCtrl.newUser);

module.exports = router;
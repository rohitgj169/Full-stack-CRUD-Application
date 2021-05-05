const express = require("express");
const commentsCtrl = require("../controller/comments");

const router = express.Router();

router.post("/activities/:id/comments", commentsCtrl.createComment);
router.delete("/comments/:id", commentsCtrl.deleteComment);

module.exports = router;

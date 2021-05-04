const express = require("express");
const reviewCtrl = require("../controller/reviews");

const router = express.Router();

router
  .route("/")
  .get(reviewCtrl.getAllReviews)
  .post(reviewCtrl.createReview);

module.exports = router;

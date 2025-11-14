const express = require("express");
const router = express.Router();

const { addFeedback, getFeedback, deleteFeedback } = require("../controllers/feedbackController");

router.post("/", addFeedback);
router.get("/", getFeedback);
router.delete("/:id", deleteFeedback);

module.exports = router;

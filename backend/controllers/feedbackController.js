const Feedback = require("../models/Feedback");

// @desc Add new feedback
// @route POST /api/feedback
const addFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newFeedback = await Feedback.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      data: newFeedback,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all feedback
// @route GET /api/feedback
const getFeedback = async (req, res) => {
  try {
    const feedbackList = await Feedback.find().sort({ date: -1 });

    res.status(200).json({
      success: true,
      count: feedbackList.length,
      data: feedbackList
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);

    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    res.status(200).json({
      success: true,
      message: "Feedback deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addFeedback, getFeedback, deleteFeedback };

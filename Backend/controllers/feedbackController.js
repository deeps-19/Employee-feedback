import Feedback from "../models/Feedback.js";

// Submit feedback
export const submitFeedback = async (req, res) => {
  try {
    const { employeeName, employeeEmail, message } = req.body;

    const fb = new Feedback({
      employeeName,
      employeeEmail,
      message,
    });

    await fb.save();

    res.json({ msg: "Feedback submitted successfully" });
  } catch (err) {
    console.log(err.message);
    
    res.status(500).json({ err: err.message });
  }
};

// Admin - Get all feedback with search + filter
export const getFeedback = async (req, res) => {
  try {
    const { search } = req.query;

    let filter = {};

    if (search) {
      filter = {
        $or: [
          { employeeName: { $regex: search, $options: "i" } },
          { employeeEmail: { $regex: search, $options: "i" } },
          { message: { $regex: search, $options: "i" } },
        ],
      };
    }

    const feedback = await Feedback.find(filter).sort({ date: -1 });
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  employeeName: { type: String, required: true },
  employeeEmail: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Feedback", feedbackSchema);

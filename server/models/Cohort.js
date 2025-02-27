const mongoose = require("mongoose");
const { Schema } = mongoose;

const cohortSchema = new Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  program: { type: String, required: true },
  campus: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cohort", cohortSchema);

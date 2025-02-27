const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cohort: { type: Schema.Types.ObjectId, ref: "Cohort" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Student", studentSchema);

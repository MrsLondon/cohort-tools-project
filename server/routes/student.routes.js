const router = require("express").Router();
const Student = require("../models/Student");

// Get all students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.find().populate("cohort");
    res.json(students);
  } catch (error) {
    next(error);
  }
});

// Get single student
router.get("/:id", async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id).populate("cohort");
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

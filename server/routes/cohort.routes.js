const router = require("express").Router();
const Cohort = require("../models/Cohort");

// Get all cohorts
router.get("/", async (req, res, next) => {
  try {
    const cohorts = await Cohort.find();
    res.json(cohorts);
  } catch (error) {
    next(error);
  }
});

// Get single cohort
router.get("/:id", async (req, res, next) => {
  try {
    const cohort = await Cohort.findById(req.params.id);
    if (!cohort) {
      return res.status(404).json({ message: "Cohort not found" });
    }
    res.json(cohort);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

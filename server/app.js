const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const PORT = 5005;

// STATIC DATA
// Devs Team - Import the provided files with JSON data of students and cohorts here:
// ...
const cohorts = require("./cohorts.json");
const students = require("./students.json");

// Initialize express app
const app = express();

// DATABASE CONNECTION
const MONGODB_URI = "mongodb://localhost:27017/cohort-tools-dev";
mongoose
  .connect(MONGODB_URI)
  .then(async (x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => console.error("Error connecting to mongo", err));

// MIDDLEWARE
// Research Team - Set up CORS middleware here:
// ...
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});

app.get("/api/cohorts", (req, res) => {
  res.json(cohorts);
});

app.get("/api/students", (req, res) => {
  res.json(students);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

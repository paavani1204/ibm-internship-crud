const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let students = [];

// CREATE
app.post("/students", (req, res) => {
  students.push(req.body);
  res.send("Student added");
});

// READ
app.get("/students", (req, res) => {
  res.json(students);
});

// DELETE
app.delete("/students/:index", (req, res) => {
  students.splice(req.params.index, 1);
  res.send("Student deleted");
});

// START SERVER
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

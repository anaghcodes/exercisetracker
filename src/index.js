const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const { initDB } = require("./db");

const { addUser, fetchUsers } = require("./controllers/userController");
const { addExercise } = require("./controllers/exerciseController");
const { fetchLog } = require("./controllers/logController");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
initDB();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./views/index.html");
});

app.post("/api/users", addUser);
app.get("/api/users", fetchUsers);
app.post("/api/users/:_id/exercises", addExercise);
app.get("/api/users/:_id/logs", fetchLog);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

require("dotenv").config();
const express = require("express"),
  app = express(),
  cors = require("cors"),
  { json } = require("body-parser"),
  port = 3001;

app.use(json());
app.use(cors());

app.listen(port, () => {
  console.log(`Magic happens on ${port}`);
});

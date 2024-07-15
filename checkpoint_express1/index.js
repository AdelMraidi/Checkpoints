// import express
const express = require("express");
const path = require("path");
const WorkingHourMiddleware = require("./middlewares/workinghour");

//initialisation
const server = express();

// set the view engine
server.set("view engine", "pug");
server.set("views", path.join(__dirname, "views"));

// middleware to check
server.use(WorkingHourMiddleware);

//routing
server.get("/", (req, res) => {
  res.render("home");
});
server.get("/services", (req, res) => {
  res.render("services");
});
server.get("/contact", (req, res) => {
  res.render("contact");
});

// start the server
server.listen(8000, () => {
  console.log("server is running");
});

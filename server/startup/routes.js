const express = require("express");
const error = require("../middleware/error");;
const defaultRoutes = require('../routes/default');
module.exports = function(app) {
  app.use(express.json());
  app.use(error);
  app.use("/api/greeting", defaultRoutes);
};

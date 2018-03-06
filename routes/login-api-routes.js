// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/login", function(req, res) {
    db.User.findOne({
      where: {
        username: req.body.username
        id: req.params.id
      },
      include: [db.Author]
    }).then(function(data) {
      if (data.isTeacher) {
        res.json(data);
      }
      else if (data.isAdmin) {
        res.json(data);
      }
    });
  });
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
    db.Staff.findOne({
      where: {
        username: req.body.username,
        id: req.params.id
      },
      include: [db.Author]
    }).then(function(data) {
      res.render("login/login", data);

      if (data.isTeacher) {
        res.json(data);
      }
      else if (data.isAdmin) {
        res.json(data);
      }
    });
  });
}

// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the staff page
    if (req.user) {
      res.redirect("/staff");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the staff page
    if (req.user) {
      res.redirect("/staff");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("login/login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/staff", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/staff.html"));
  });

};

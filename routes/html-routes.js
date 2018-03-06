<<<<<<< HEAD
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
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/staff", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/staff.html"));
  });

};
=======
// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // cms route loads cms.html
  app.get("/parent", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/parent.html"));
  });

  // blog route loads blog.html
  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin.html"));
  });

  // authors route loads author-manager.html
  app.get("/teacher", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/teacher.html"));
  });

};
>>>>>>> f6ad486588cc140a308fcc241781b06b6abdce07

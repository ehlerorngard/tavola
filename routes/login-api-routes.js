// // *********************************************************************************
// // api-routes.js - this file offers a set of routes for displaying and saving data to the db
// // *********************************************************************************

// // Dependencies
// // =============================================================
// var db = require("../models");

// // Routes
// // =============================================================


// // Requiring path to so we can use relative routes to our HTML files
// var path = require("path");

// // Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

// module.exports = function(app) {

//   app.get("/signup", function(req, res) {
//     // If the user already has an account send them to the staff page
//     res.render("signup");
//   });

//   app.get("/login", function(req, res) {
//     // If the user already has an account send them to the staff page
//     if (req.staff) {
//       res.redirect("/staff");
//     }
//     // res.sendFile(path.join(__dirname, "../public/login.html"));
//     res.render("login");
//   });

//   // Here we've add our isAuthenticated middleware to this route.
//   // If a user who is not logged in tries to access this route they will be redirected to the signup page
//   app.get("/staff", isAuthenticated, function(req, res) {
//     res.render("student-profiles-all");
//   });

// };

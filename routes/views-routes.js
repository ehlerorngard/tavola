const path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    // cms route loads cms.html
    app.get("/parent", function (req, res) {
        res.render('add');
    });

    app.get("/", function (req, res) {
        res.render('home');
    });

    app.get("/signup", function (req, res) {
        // If the user already has an account send them to the staff page
        res.render("signup");
    });

    app.get("/login", function (req, res) {
        // If the user already has an account send them to the staff page
        if (req.user) {
            res.redirect("/staff");
        }
        res.render("login");
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/staff", isAuthenticated, function (req, res) {
        res.render("student-profiles-all");
    });
};
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

    app.get("/api/parent/class", function(req, res) {
        res.render('class');
    });

    app.get("/staff/student", function(req, res) {
        res.render('partials/studentprofiles-block');
    });

    app.get("/staff/addparent", function(req, res) {
        res.render('staff/add-parent')
    });

    app.get("/staff/signup", function(req, res) {
        res.render('staff/create');
    });

    app.get("/staff/search", function(req, res) {
        res.render('staff/search');
    });
    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/staff", isAuthenticated, function (req, res) {
        res.render("student-profiles-all");
    });
};
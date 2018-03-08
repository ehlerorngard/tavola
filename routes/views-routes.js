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
};
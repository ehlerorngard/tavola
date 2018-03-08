// *********************************************************************************
// views-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    // cms route loads cms.html
    app.get("/parent", function (req, res) {
        res.render('add');
    });
    // cms route loads cms.html
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
        // res.sendFile(path.join(__dirname, "../public/login.html"));
        res.render("login");
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/staff", isAuthenticated, function (req, res) {
        res.render("student-profiles-all");
    });

};

// // cms route loads cms.html
// router.get("/parent", function (req, res) {
//     res.render('add');
// });

// router.get("/authors", function (req, res) {
//     res.render('authors');
// });


// // helper for / and blog routes
// function renderBlog(req, res) {
//     var query = {};
//     if (req.query.author_id) {
//         query.AuthorId = req.query.author_id;
//     }
//     db.Post.findAll({
//         where: query,
//         include: [db.Author]
//     }).then(function (posts) {
//         res.render('blog', { posts: posts })
//     });
// }

// module.exports = router;
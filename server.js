const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
// Requiring passport as we've configured it
var passport = require("./config/passport");

const app = express();

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
// Creating express app and configuring middleware needed for authentication
app.use(express.static("public"));
// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
// Authentication - we need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

var loginRoutes = require("./routes/login-api-routes.js")(app);
var parentRoutes = require("./routes/parent-api-routes.js")(app);
var viewsRoutes = require("./routes/views-routes.js")(app);
var staffRoutes = require("./routes/staff-api-routes.js")(app);


// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

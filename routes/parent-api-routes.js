var db = require("../models");

module.exports = function(app) {
  app.get("/api/parent/class", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Parent.findAll({
      include: [db.Student]
    }).then(function(dbStudent) {
      console.log(dbStudent);
      res.json(dbStudent);
    });
  });

 

  app.post("/api/parent/add", function(req, res) {
    db.Parent.create(req.body).then(function(dbStudent) {
      res.json(dbStudent);
      console.log(dbStudent);
    });
  });


};
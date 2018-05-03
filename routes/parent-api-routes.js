var db = require("../models");

module.exports = function(app) {
  // Display students
  app.get("/api/parent/class", function(req, res) {
    
    db.Student.findAll({}).then(function(data) {
      res.render("class", {class: data});
    });
  });

  app.post("/api/parent/add", function(req, res) {
    db.Student.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      birth_date: req.body.birth_date,
      parent_id: req.body.parent_id,
      teacher_id: req.body.teacher_id,
      asthma: req.body.asthma,
      allergy: req.body.allergy,
      epi_pen: req.body.epi_pen,
      chronic_condition: req.body.chronic_condition
    })
    .then(function(dbStudent) {
      res.json(dbStudent);
      console.log(dbStudent);
    });
  });

};


var db = require("../models");

module.exports = function(app) {
  app.get("/api/staff/class", function(req, res) {
    db.Student.findAll({
      where: {teacher_id: req.body.id},
      include: [{
        model: db.Parent,
        through: {
          attributes: [
            "first_name", "last_name", "phone_number"
          ],
        }
      }]
    }).then(function(data){
      var dbStudent = {
        infoForTeacher: data
      }
      console.log(dbStudent);
      res.render("staff/student-profiles-all", dbStudent);
    });
  });

  app.get("/api/staff/class/asthma", function(req, res) {
    db.Student.findAll({
      attributes: {
        exclude: ["birth_date", "parent_id", "teacher_id"]
      },
      where: {
        teacher_id: req.body.id,
        asthma: true
      },
      include: [{
        model: db.Parent,
        through: {
          attributes: [
            "first_name", "last_name", "phone_number"
          ]
        }
      }]
    }).then(function(data){
      var dbStudent = {
        infoForTeacher: data
      }
      console.log(dbStudent);
      res.render("staff", dbStudent);
    });
  });
  app.get("/api/staff/class/allergies", function(req, res) {
    db.Student.findAll({
      attributes: ["first_name", "last_name", "allergy", "epi_pen", "chronic_condition", "asthma"],
      where: {
        teacher_id: req.body.id,
        allergies: {
          [Sequelize.Op.ne]: null
        }
      },
      include: [{
        model: db.Parent,
        through: {
          attributes: [
            "first_name", "last_name", "phone_number"
          ],
        }
      }]
    }).then(function(data){
      var dbStudent = {
        infoForTeacher: data
      }
      console.log(dbStudent);
      res.render("staff", dbStudent);
    });
  });

  app.get("/api/staff/class/allergies", function(req, res) {
    db.Student.findAll({
      attributes: ["first_name", "last_name", "allergy", "epi_pen", "chronic_condition", "asthma"],
      where: {
        teacher_id: req.body.id,
        allergies: {
          [Sequelize.Op.ne]: null
        }
      },
      include: [{
        model: db.Parent,
        through: {
          attributes: [
            "first_name", "last_name", "phone_number"
          ],
        }
      }]
    }).then(function(data){
      var dbStudent = {
        infoForTeacher: data
      }
      console.log(dbStudent);
      res.render("staff", dbStudent);
    });
  });
  app.post("/api/admin/new_staff", function(req, res) {
    db.Staff.create(req.body).then(function(newstaff){
      console.log(newstaff);
      res.json(newstaff);
    });
  });

  app.delete("/api/staff/:id", function(req, res) {
    db.Student.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  // Find all students with the matching last name
  app.post("/search", function(req, res){
    db.Student.findAll({
      where: {
        last_name: req.body.last_name
      }
    }).then(function(studentData){
      console.log("SEARCH DATA = ", studentData.last_name);
      res.json(studentData);
      
    });

  });

};





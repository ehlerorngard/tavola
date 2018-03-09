var db = require("../models");

module.exports = function(app) {
  
    app.post("/staff/addparent", function(req, res){
      db.Parent.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number,
        student_id: req.body.student_id,
        parentMedConsent: req.body.parentMedConsent
      })
      .then(function(newParent){
        console.log(newParent);
      })
    });

  // app.delete("/api/teacher/:id", function(req, res) {
  //   db.Student.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });
  app.post("/staff/addstudent", function(req, res){
    db.Student.create({
     first_name: firstnameInput,
      last_name: lastnameInput,
      birth_date: birthdateInput,
      parent_id: parentIdInput,
      teacher_id: staffIdInput,
      asthma: asthma,
      allergy: studentAllergy,
      epi_pen: epiPen,
      chronic_condition: chronicCon
    })
    .then(function(newStudent){
      console.log(newStudent);
    })
  });

  // Find all students with the matching last name
  app.post("/staff/search", function(req, res){

    db.Student.findAll({
      where: {
        last_name: req.body.last_name
      }
    }).then(function(studentData){

      res.json(studentData[0].dataValues);
    });
  });

  app.get("/staff/allstudents", function(req, res) {
  
    db.Student.findAll().then(function(data) {
      console.log("data is", data);
      res.json(data[0].dataValues)
      // res.render("class", {class: data});
    });
  });

};
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

  // app.delete("/api/teacher/:id", function(req, res) {
  //   db.Student.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });


  // Find all students with the matching last name
  app.post("/staff/student/search", function(req, res){

    db.Student.findAll({
      where: {
        last_name: req.body.last_name
      }
    }).then(function(studentData){

      res.json(studentData[0].dataValues);
      // res.redirect("/staff/student/updateform");

      // res.render("staff/search", {student: studentData[0].dataValues});

    });
  });

  app.get("/staff/allstudents", function(req, res) {
  
    db.Student.findAll().then(function(data) {
      console.log("data is", data);
      res.json(data[0].dataValues)
      // res.render("class", {class: data});
    });
  });

  app.post("/staff/student/update", function(req, res) {
    console.log("is this defined at all?? " + JSON.stringify(req.body, null, 4));
    console.log("getting data for ... " + req.body.id);
    db.Student.findOne({
      where: {
        id: req.body.id
      }
    }).then(function(student_data) {
      console.log("STUDENT: " + JSON.stringify(student_data));
      console.log("first name is " + student_data.first_name);
      // res.redirect("/staff/student/update");
      res.json(student_data.dataValues);
    }).catch(function(err) {
      if (err) throw err;
    });
  });
};
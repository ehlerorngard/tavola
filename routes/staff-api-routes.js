var db = require("../models");

module.exports = function(app) {
  // app.get("/api/teacher/class", function(req, res) {
  //   db.Student.findAll({
  //     where: {teacher_id: req.body.id},
  //     include: [{
  //       model: db.Parent,
  //       through: {
  //         attributes: [
  //           "first_name", "last_name", "phone_number"
  //         ],
  //       }
  //     }]
  //   }).then(function(data){
  //     var dbStudent = {
  //       infoForTeacher: data
  //     }
  //     console.log(dbStudent);
  //     res.render("admin", dbStudent);
  //   });
  // });

  // app.get("/api/teacher/class/asthma", function(req, res) {
  //   db.Student.findAll({
  //     attributes: {
  //       exclude: ["birth_date", "parent_id", "teacher_id"]
  //     },
  //     where: {
  //       teacher_id: req.body.id,
  //       asthma: true
  //     },
  //     include: [{
  //       model: db.Parent,
  //       through: {
  //         attributes: [
  //           "first_name", "last_name", "phone_number"
  //         ]
  //       }
  //     }]
  //   }).then(function(data){
  //     var dbStudent = {
  //       infoForTeacher: data
  //     }
  //     console.log(dbStudent);
  //     res.render("staff", dbStudent);
  //   });
  // });
  // app.get("/api/teacher/class/allergies", function(req, res) {
  //   db.Student.findAll({
  //     attributes: ["first_name", "last_name", "allergy", "epi_pen", "chronic_condition", "asthma"],
  //     where: {
  //       teacher_id: req.body.id,
  //       allergies: {
  //         [Sequelize.Op.ne]: null
  //       }
  //     },
  //     include: [{
  //       model: db.Parent,
  //       through: {
  //         attributes: [
  //           "first_name", "last_name", "phone_number"
  //         ],
  //       }
  //     }]
  //   }).then(function(data){
  //     var dbStudent = {
  //       infoForTeacher: data
  //     }
  //     console.log(dbStudent);
  //     res.render("staff", dbStudent);
  //   });
  // });

  // app.get("/api/teacher/class/allergies", function(req, res) {
  //   db.Student.findAll({
  //     attributes: ["first_name", "last_name", "allergy", "epi_pen", "chronic_condition", "asthma"],
  //     where: {
  //       teacher_id: req.body.id,
  //       allergies: {
  //         [Sequelize.Op.ne]: null
  //       }
  //     },
  //     include: [{
  //       model: db.Parent,
  //       through: {
  //         attributes: [
  //           "first_name", "last_name", "phone_number"
  //         ],
  //       }
  //     }]
  //   }).then(function(data){
  //     var dbStudent = {
  //       infoForTeacher: data
  //     }
  //     console.log(dbStudent);
  //     res.render("staff", dbStudent);
  //   });
  // });
  // app.post("/api/admin/new_staff", function(req, res) {
  //   db.Staff.create(req.body).then(function(newstaff){
  //     console.log(newstaff);
  //     res.json(newstaff);
  //   });
  // });

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
  app.post("/staff/search", function(req, res){
    // console.log(req.body.last_name);
    db.Student.findAll({
      where: {
        last_name: req.body.last_name
      }
    }).then(function(studentData){
      console.log(studentData);
      console.log("SEARCH DATA = ", studentData[0].dataValues);

      res.json(studentData[0].dataValues);
      res.redirect("/staff/student/updateform");
      // res.render("staff/search", {student: studentData[0].dataValues});
      
    });

  });

  app.get("/staff/student/update", function(req, res){
    console.log("getting...");
    db.Student.findAll({
      where: {
        id: req.body.id
      }
    }).then(function(student_data) {
      console.log("STUDENT: " + student_data);
      res.json(student_data[0].dataValues);
    });
  });
};
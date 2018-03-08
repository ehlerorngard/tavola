var db = require("../models");

module.exports = function(app) {

  // this GET grabs info for the parent screen(..right?)
  // –– attributes will be the columns whose values
  //    we want to be able to disply to the user
  // app.get("/api/parent/class", function(req, res) {
    
  //   // this would display to the parent user their own info
  //   db.Parent.findAll({
  //     where: {parent_id: req.body.id},
  //     include: [{
  //       model: db.Student,
  //       through: {
  //         attributes: [
  //           // any student values we'd want would go here
  //         ],
  //       }
  //     }]
  //   }).then(function(dbStudent) {
  //     console.log(dbStudent);
  //     res.json(dbStudent);
  //   });

  //   // =========================
  //   // this grabs data for the parent's student(s),
  //   // AND includes that student's teacher's name,
  //   //     phone # and email
  //   // =========================
  //   db.Student.findAll({
  //     where: {parent_id: req.body.parent_id},
  //     include: [{
  //       model: db.Staff,
  //       attributes: ['first_name', 'last_name', 'phone_number', 'email'],
  //       where: {id: db.Student.teacher_id}
  //     }]
  //   }).then(function(data){
  //     var dbStudent = {
  //       infoForParent: data
  //     }
  //     console.log(dbStudent);
  //     res.render("parent/class", dbStudent);

  //   });
  // });


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
      // res.render("add", dbStudent);

    });
  });

};


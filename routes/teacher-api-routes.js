var db = require("../models");

module.exports = function(app) {

app.get("/api/teacher/class", function(req, res) {
    
// Display to the parent his/her student population info
    db.Teacher.findAll({
      where: {teacher_id: req.body.teacher_id}
      include: [{
        model: db.Teacher,
        through: {
          attributes: [
// any student values we wpuld want would go here
          ],
        }
      }]
    }).then(function(dbTeacher) {
      console.log(dbTeacher);
      res.json(dbTeacher);
    });

// =========================
// Read data for the teacher's student(s),
// =========================
    db.Teacher.findAll({
      where: {teacher_id: req.body.teacher_id},
      include: [{
        model: db.Staff,
        attributes: ['first_name', 'last_name', 'phone_number', 'email']
        where: {teacher_id: req.body.teacher_id}
      }]
    }).then(function(dbTeacher){
      console.log(dbTeacher);
      res.json(dbTeacher);
    });
  });

  app.post("/api/teacher/add", function(req, res) {
    db.Teacher.create(req.body).then(function(dbStudent) {
      res.json(dbTeacher);
      console.log(dbTeacher);
    });
  });
};

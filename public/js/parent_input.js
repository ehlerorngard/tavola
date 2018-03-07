$(document).ready(function () {
  /* global moment */

  var firstnameInput = $("#firstname-input");
  var lastnameInput = $("#lastname-input");
  var birthdateInput = $("#birthdate-input");
  var parentIdInput = $("#parent-ID");
  var staffIdInput = $("#staff-ID");
  var asthma = $(".asthma");
  var studentAllergy = $("#student-allergies");
  var epiPen = $(".epipen");
  var chronicCon = $("#chronic-condition");
  var formInputs = $(".form-control");
  var formCheckInputs = $(".form-check-input");

  // Adding event listeners to the form to create a new object
  $(document).on("submit", "#student-form", handleStudentFormSubmit);

  // Getting the intiial list of Authors
  // getStudents();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleStudentFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!formInputs.val().trim().trim() || !formCheckInputs.val().trim().trim()) {
      return;
    }
    // if (!firstnameInput.val().trim().trim() || !lastnameInput.val().trim().trim() || !birthdateInput.val().trim().trim()) {
    //   return;
    // }
    else {
      // Calling the upsertStudent function and passing in the value of the form entries
      upsertFirstName({
        firstname: firstnameInput
          .val()
          .trim()
      });
      upsertLastName({
        lastname: lastnameInput
          .val()
          .trim()
      });
      upsertBirthdate({
        birthdate: birthdateInput
          .val()
          .trim()
      });
      upsertParentId({
        parentId: parentIdInput
          .val()
          .trim()
      });
      upsertStaffId({
        staffId: staffIdInput
          .val()
          .trim()
      });
      upsertAsthmaCount({
        asthma: asthma
          .val()
          .trim()
      });
      upsertAllergy({
        allergy: studentAllergy
          .val()
          .trim()
      });
      upsertEpipenCount({
        epipen: epipen
          .val()
          .trim()
      });
      upsertChronicCon({
        condition: chronicCon
          .val()
          .trim()
      });
    }

    // A function for creating an student. Calls getAuthors upon completion
    function upsertStudent(studentData) {
      $.post("/api/students", studentsData, function () {
        window.location.origin;
      });
    }

    // )
    //     .then(getStudents);
    // }

    // // Function for creating a new list row for students
    // function createStudentRow(studentsData) {
    //   var newTr = $("<tr>");
    //   newTr.data("students", studentsData);
    //   newTr.append("<td>" + studentsData.name + "</td>");
    //   newTr.append("<td> " + studentsData.length + "</td>");
    //   newTr.append("<td><a href='/blog?students_id=" + studentsData.id + "'>Go to Posts</a></td>");
    //   newTr.append("<td><a href='/cms?students_id=" + studentsData.id + "'>Create a Post</a></td>");
    //   newTr.append("<td><a style='cursor:pointer;color:red' class='delete-students'>Delete students</a></td>");
    //   return newTr;
    // }

    // Adding event listeners to initiate AJAX call to get the allergies, the presence of asthmatics, and other chronic conditions
    $(document).on("submit", "#student-form", getClass);

    // Function for retrieving authors and getting them ready to be rendered to the page
    function getClass() {
      $.get("/api/class", function (data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createStudentRow(data[i]));
        }
        renderStudentList(rowsToAdd);
        nameInput.val("");
      });
    }

    // A function for rendering the list of authors to the page
    // function renderAuthorList(rows) {
    //   authorList.children().not(":last").remove();
    //   authorContainer.children(".alert").remove();
    //   if (rows.length) {
    //     console.log(rows);
    //     authorList.prepend(rows);
    //   } else {
    //     renderEmpty();
    //   }
    // }

    // // Function for handling what to render when there are no authors
    // function renderEmpty() {
    //   var alertDiv = $("<div>");
    //   alertDiv.addClass("alert alert-danger");
    //   alertDiv.text("You must create an Student before you can create a Post.");
    //   authorContainer.append(alertDiv);
    // }

  }
});
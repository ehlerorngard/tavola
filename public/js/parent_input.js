$(document).ready(function () {
  /* global moment */

  // Adding event listeners to the form to create a new object
  $(".create-student-form").on("submit", function(event){
    event.preventDefault();

    var firstnameInput = $("#firstname-input").val().trim();
    var lastnameInput = $("#lastname-input").val().trim();
    var birthdateInput = $("#birthdate-input").val().trim();
    var parentIdInput = $("#parent-ID").val().trim();
    var staffIdInput = $("#staff-ID").val().trim();
    var asthma = $("input[name=asthma_radio]:checked").val();
    var studentAllergy = $("#student-allergies").val().trim();
    var epiPen = $("input[name=epiPen_radio]:checked").val();
    var chronicCon = $("#chronic-condition").val().trim();

    // Don't do anything if the name fields hasn't been filled out
    // if (!formInputs.val().trim().trim() || !formCheckInputs.val().trim().trim()) {
    //   return;
    // }
    // // if (!firstnameInput.val().trim().trim() || !lastnameInput.val().trim().trim() || !birthdateInput.val().trim().trim()) {
    // //   return;
    // // }
    // else {
      var newStudent = {
        first_name: firstnameInput,
        last_name: lastnameInput,
        birth_date: birthdateInput,
        parent_id: parentIdInput,
        teacher_id: staffIdInput,
        asthma: asthma,
        allergy: studentAllergy,
        epi_pen: epiPen,
        chronic_condition: chronicCon
      };

      $.ajax("/api/parent/add", {
        type: "POST",
        data: newStudent
      }).then(function() {
          // reloads the page to empty out the values
          console.log("made it to the 'then' of the AJAX new student post");
          location.reload();
        }
      );
      // $.post("/api/parent/add", newStudent, function() {
      //   console.log("student posted!");
      //   location.reload();
      // });
  });


  // var firstnameInput = $("#firstname-input").val().trim();
  // var lastnameInput = $("#lastname-input").val().trim();
  // var birthdateInput = $("#birthdate-input").val().trim();
  // var parentIdInput = $("#parent-ID").val().trim();
  // var staffIdInput = $("#staff-ID").val().trim();
  // var asthma = $("[name='asthma_radio']:checked").val();
  // var studentAllergy = $("#student-allergies").val().trim();
  // var epiPen = $("[name='epiPen_radio']:checked").val();
  // var chronicCon = $("#chronic-condition").val().trim();

  // function StudentFormSubmit(event) {
  //   event.preventDefault();
  //   // Don't do anything if the name fields hasn't been filled out
  //   if (!formInputs.val().trim().trim() || !formCheckInputs.val().trim().trim()) {
  //     return;
  //   }
  //   // if (!firstnameInput.val().trim().trim() || !lastnameInput.val().trim().trim() || !birthdateInput.val().trim().trim()) {
  //   //   return;
  //   // }
  //   else {
  //     var newStudent = {
  //       first_name: firstnameInput,
  //       last_name: lastnameInput,
  //       birth_date: birthdateInput,
  //       grade: studentGrade,
  //       parent_id: parentIdInput,
  //       teacher_id: staffIdInput,
  //       asthma: asthma,
  //       allergy: studentAllergy,
  //       epi_pen: epipen,
  //       chronic_condition: chronicCon
  //     };

  //     $.ajax("/api/parent/add", {
  //       type: "POST",
  //       data: newStudent
  //     }).then(function() {
  //         console.log("created new cat");
  //         // Reload the page to get the updated list
  //         location.reload();
  //       }
  //     );
  //   }
  // }

 

    // Adding event listeners to initiate AJAX call to get the allergies, the presence of asthmatics, and other chronic conditions
  // $(document).on("click", "#", getClass);

  //   // Function for retrieving authors and getting them ready to be rendered to the page
  //   function getClass() {
  //     $.get("/api/parent/class", function(data) {
  //       // var rowsToAdd = [];
  //       // for (var i = 0; i < data.length; i++) {
  //       //   rowsToAdd.push(createStudentRow(data[i]));
  //       // }
  //       // renderStudentList(rowsToAdd);
  //       // nameInput.val("");
  //       console.log(data);
  //     });
  //   }

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
});

$(document).ready(function() {

  // When user enters a student name in search bar and hits submit, trigger call to show all info for that student
  $(document).on("click", "#student-search", searchStudent);

  function searchStudent(event){
    event.preventDefault();
    
    // Grabs student name in search bar to use in database
    var studentName = {
      last_name: $("#search-result").val().trim()
    };
    
    console.log("student name = ", studentName);

    var userInput = $("#search-result").val().trim();
    // Exits out of function if search bar is submitted blank
    if(userInput.length === 0){
      console.log("blank triggered");
      return;
    }

    $.post("/staff/search", studentName)
      // console.log(studentName + "HERERERERERE")
      .done(function(studentData){

        console.log("THIS IS WORKING!!!!!!!!", studentData);
      });

    // Empties out search bar
    $("#student-search").val("");
  }

  // To add a parent into the database
  $("#parent-form").on("click", function(event){
    event.preventDefault();

    var firstnameInput = $("#firstname-input").val().trim();
    var lastnameInput = $("#lastname-input").val().trim();
    var parentPhone = $("#parent-phone").val().trim();
    var studentIdInput = $("#student-ID").val().trim();
    var medConsent = $("input[name=med_radio]:checked").val();

    var newParent = {
        first_name: firstnameInput,
        last_name: lastnameInput,
        phone_number: parentPhone,
        student_id: studentIdInput,
        parentMedConsent: medConsent
      };

      $.ajax("/staff/addparent", {
        type: "POST",
        data: newParent
      }).then(function() {
          // reloads the page to empty out the values
          // location.reload();
          console.log("success!");
        }
      );
  });

  $("#student-form").on("click", function(event){
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

      $.ajax("/api/staff/addstudent", {
        type: "POST",
        data: newStudent
      }).then(function() {
          // reloads the page to empty out the values
          location.reload();
        }
      );
  });
});
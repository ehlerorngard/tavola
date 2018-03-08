$(document).ready(function() {

  // When user enters a student name in search bar and hits submit, trigger call to show all info for that student
  $(document).on("click", "#student-search", searchStudent);

  function searchStudent(event){
    event.preventDefault();
    
    // Grabs student name in search bar to use in database
    var studentName = {
      last_name: $("#search-result").val().trim()
    };

    var userInput = $("#search-result").val().trim();
    // Exits out of function if search bar is submitted blank
    if(userInput.length === 0){
      return;
    }

    $.post("/staff/search", studentName)
      // console.log(studentName + "HERERERERERE")
      .done(function(studentData){
      	console.log("front-end", studentData);

      	$("#id").text(studentData.id);
      	$("#first-name").text(studentData.first_name);
      	$("#last-name").text(studentData.last_name);
      	$("#birth").text(studentData.birth_date);
      	$("#parent-id").text(studentData.parent_id);
      	$("#teacher-id").text(studentData.teacher_id);
      	$("#asthma").text(studentData.asthma);
      	$("#allergy").text(studentData.allergy);
      	$("#epi-pen").text(studentData.epi_pen);
      	$("#chronic").text(studentData.chronic_condition);
      });

    // Empties out search bar
    $("#search-result").val("");
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
});
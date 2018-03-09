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

  // View all students
	$(document).on("click", "#view-all", viewAll);
		function viewAll(event) {
			event.preventDefault();

	      $.ajax("/staff/allstudents", {
	        type: "GET"
	      }).then(function(studentData) {
	      	console.log("studentdata = ", studentData);
		      	$("#id-view").text(studentData.id);
		      	$("#first-name-view").text(studentData.first_name);
		      	$("#last-name-view").text(studentData.last_name);
		      	$("#birth-view").text(studentData.birth_date);
		      	$("#parent-id-view").text(studentData.parent_id);
		      	$("#teacher-id-view").text(studentData.teacher_id);
		      	$("#asthma-view").text(studentData.asthma);
		      	$("#allergy-view").text(studentData.allergy);
		      	$("#epi-pen-view").text(studentData.epi_pen);
		      	$("#chronic-view").text(studentData.chronic_condition);
	        });
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
          location.reload();
        }
      );
  });

  // Add a student
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

      $.ajax("/staff/addstudent", {
        type: "POST",
        data: newStudent
      }).then(function() {
          // reloads the page to empty out the values
          location.reload();
        }
      );
  });
});
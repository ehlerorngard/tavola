$(document).ready(function() {

  //====================================
  //=== search students by last name ===
  //====================================

  $(document).on("click", ".updateStudent", function(event) {
    event.preventDefault();
    console.log("default prevented...  did the link redirect??");
  });
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

    $.post("/staff/student/search", studentName)
      // console.log(studentName + "HERERERERERE")
      .done(function(studentData){

      	console.log("front-end data", studentData);

      	$("#id").text(studentData.id);
      	$("#first-name").text(studentData.first_name);
      	$("#last-name").text(studentData.last_name);
      	$("#birth").text(studentData.birth_date);
      	$("#parent-id").text(studentData.parent_id);
      	$("#teacher-id").text(studentData.staff_id);
      	$("#asthma").text(studentData.asthma);
      	$("#allergy").text(studentData.allergy);
      	$("#epi-pen").text(studentData.epi_pen);
      	$("#chronic").text(studentData.chronic_condition);
        $("#updateStudentBox").html("<a class='btn btn-dark updateStudent' data-id='" + studentData.id + "' href='/staff/student/update' type='link' title='pleasework'>edit</a>")
      });

    // Empties out search bar
    $("#search-result").val("");
  }

  //=================================
  //=== update a student's record ===
  //=================================

  $(document).on("click", ".updateStudent", function(event) {
    event.preventDefault();
    var id_val = $(this).data("id");
    console.log(id_val);
    var student_id = {
      id: $(this).data("id")
    };
    console.log("we are updating student number " + student_id.id);
    console.log("this is the value we're passing off: " + student_id.id);
    // $.post("/staff/student/update", student_id)
      // .done(function(data){
        // console.log("i am data " + data);
      // });

    $.ajax("/staff/student/update", {
      method: "POST",
      data: student_id,
      processData: true
    }).then(function(student_object){
      console.log("we got the data!!  It's " + student_object.first_name);
        $("#firstname2").val(student_object.first_name);
        $("#lastname2").val(student_object.last_name);
        $("#birthdate2").val(student_object.birth_date);
        $("#parent-ID2").val(student_object.parent_id);
        $("#staff-ID2").val(student_object.staff_id);
        $("input:radio[name=asthma_radio2]").val([student_object.asthma]);
        // $("input[name=asthma_radio2][value=" + student_object.asthma + "]").attr('checked', 'checked');
        $("#chronic_condition2").val(student_object.chronic_condition);
        
    });

  });

  //=================================
  //======== view all students ======
  //=================================

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
   
  //=================================
  //=== add a parent to the db ======
  //=================================

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

  //=================================
  //=== create a student ============
  //=================================

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

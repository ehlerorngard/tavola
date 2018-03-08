$(document).ready(function() {
  //  $.get("/api/teacher/class/asthma", function (data) {
		



		// var rowsToAdd = [];
		// for (var i = 0; i < data.length; i++) {
		// 	rowsToAdd.push(createStudentRow(data[i]));
		// }
  //     renderStudentList(rowsToAdd);
  //     nameInput.val("");
  //  });

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
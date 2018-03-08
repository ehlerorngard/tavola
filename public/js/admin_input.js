$(document).ready(function() {

  // When user enters a student name in search bar and hits submit, trigger call to show all info for that student
  $(document).on("click", "#student-search", searchStudent);

  function searchStudent(event){
    event.preventDefault();
    
    // Grabs student name in search bar to use in database
    var studentName = {
      last_name: $("#student-search").val().trim()
    };
    
    console.log("student name = ", studentName);

    var userInput = $("#student-search").val().trim();
    // Exits out of function if search bar is submitted blank
    if(userInput.length === 0){
      console.log("blank triggered");
      return;
    }

    console.log("before .post");

    $.post("/search", studentName)
      .done(function(studentData){

        console.log("THIS IS WORKING!!!!!!!!", studentData);
      });

    // Empties out search bar
    $("#student-search").val("");
  }

});


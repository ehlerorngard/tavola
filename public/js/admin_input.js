$(document).ready(function() {
   $.get("/api/teacher/class/asthma", function (data) {
		



		var rowsToAdd = [];
		for (var i = 0; i < data.length; i++) {
			rowsToAdd.push(createStudentRow(data[i]));
		}
      renderStudentList(rowsToAdd);
      nameInput.val("");
   });

}
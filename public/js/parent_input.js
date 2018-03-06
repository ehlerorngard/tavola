$(document).ready(function() {
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
  getAuthors();

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
    // Calling the upsertAuthor function and passing in the value of the name input
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
    upsertAllergy({
      allergy: studentAllergy
        .val()
        .trim()
    });
    upsertChronicCon({
      condition: chronicCon
        .val()
        .trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertAuthor(authorData) {
    $.post("/api/authors", authorData)
      .then(getAuthors);
  }

  // Function for creating a new list row for authors
  function createAuthorRow(authorData) {
    var newTr = $("<tr>");
    newTr.data("author", authorData);
    newTr.append("<td>" + authorData.name + "</td>");
    newTr.append("<td> " + authorData.Posts.length + "</td>");
    newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
    newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getAuthors() {
    $.get("/api/authors", function (data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderAuthorList(rows) {
    authorList.children().not(":last").remove();
    authorContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      authorList.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Author before you can create a Post.");
    authorContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    })
      .done(getAuthors);
  }
});
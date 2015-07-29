console.log('working');

/* This program should allow the user to add students, randomly select a student to answer a question.

This is a student project developed by AJP*/

//Variables for DOM objects to be used
//
//

var finishedPen = document.getElementById('finished');
var pendingPen = document.getElementById('pending');
var addButton = document.getElementById('addStudent');
var selectButton = document.getElementById('selectStudent');
var resetButton = document.getElementById('reset');
var students;
//FUNCTIONS
//
//


//Function to create a list item and append it to "pendingPen"

var addNewStudent = function() {
	console.log('addNewStudent Called');

	var newStudent = document.createElement('li');
	var newStudentName = prompt("What's the student's name?");

	newStudent.innerText = newStudentName;
	pendingPen.appendChild(newStudent);
	bindToList();
};

//Function to select an existing student in the pendingPen and then append it to the finishedPen

var selectStudent = function() {
	console.log('selectStudent Called');

	var pendingStudents = pendingPen.getElementsByTagName('li');
	var numPendingStudents = pendingStudents.length;

	if (numPendingStudents > 0) {
		//Generate Random Number from 0 to # of students -1
		var randomNum = Math.floor(Math.random() * numPendingStudents);

		//Chosee a student
		var chosenStudent = pendingStudents[randomNum];

		alert(chosenStudent.innerText + " was chosen.");
		//move student to finishedPen

		finishedPen.appendChild(chosenStudent);
		} else {
			alert("No students are pending.")
		};
		bindToList();
};

//Function to reset all students to PendingPen

var resetStudents = function() {
	console.log('resetStudents Called');

	var finishedStudents = finishedPen.getElementsByTagName('li');
	var numFinishedStudents = finishedStudents.length;

	for (var i = 0; i < numFinishedStudents; i++) {
		pendingPen.appendChild(finishedStudents[0]);
	};
	bindToList();
};

//Function to bind list items

var bindToList = function() {
		var pendingStudents = pendingPen.getElementsByTagName('li');
		var finishedStudents = finishedPen.getElementsByTagName('li');

		students = pendingStudents;
		for (i = 0; i < students.length; i++) {
		students[i].addEventListener('click', editMode);
	}
};

var editMode = function() {
	console.log("Edit Mode Called");
};
//Event Handlers!
//
//

addButton.addEventListener('click', addNewStudent);
selectButton.addEventListener('click', selectStudent);
resetButton.addEventListener('click', resetStudents);




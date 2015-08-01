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


//Function to create a new student list item and append it to "pendingPen"

var addNewStudent = function() {
	console.log('addNewStudent Called');

	var newStudent = document.createElement('li');
	var newStudentName = prompt("What's the student's name?");
	while (newStudentName === "") {
		newStudentName = prompt("Please enter a name.")
	};
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

//function to enable options

var editMode = function() {
	console.log("Edit Mode Called");
	if (this.childNodes.length === 1) {
	var removeButton = document.createElement('button');
	removeButton.innerText = "Remove";
	this.appendChild(removeButton);
	//Event handler to call "deleteName"
	removeButton.addEventListener('click', removeName);

	var editButton = document.createElement('button');
	editButton.innerText = "Edit";
	this.appendChild(editButton);
	//Event handler to call "editName"
	editButton.addEventListener('click', editName);

	} else {
		var nodesToRemove = this.getElementsByTagName('button');
		console.log(nodesToRemove);
		console.log(nodesToRemove.length)
		while (nodesToRemove.length > 0) {
			this.removeChild(nodesToRemove[0]);
		}

	};
};

var removeName = function() {
	this.parentNode.parentNode.removeChild(this.parentNode);
};

var editName = function() {
	var newName = prompt('New Name');

	while (newName === "") {
		newName = prompt('New Name');
	};
	this.parentNode.innerText = newName;
};


//Event Handlers!
//
//

addButton.addEventListener('click', addNewStudent);
selectButton.addEventListener('click', selectStudent);
resetButton.addEventListener('click', resetStudents);




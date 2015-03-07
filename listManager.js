//The task number on the list
var i = 1;


function removeTask(loTasksDiv, taskDiv){
	var task = document.getElementById(taskDiv);
	var taskList = document.getElementById(loTasksDiv);
	taskList.removeChild(task);
}

function createTask(){
	
	var tasklist = document.getElementById("tasksList");
	var newTaskElement = document.createElement("LI");
	var taskBox = document.createElement("INPUT");
	var minBox = document.createElement("INPUT");
	var secBox = document.createElement("INPUT");

	newTaskElement.setAttribute("id", "aTask");
	taskBox.setAttribute("type", "text");
	minBox.setAttribute("type", "text");
	secBox.setAttribute("type", "text");

	taskBox.setAttribute("id", "tName");
	minBox.setAttribute("id", "tMinutes");
	secBox.setAttribute("id", "tSeconds");

	taskBox.setAttribute("name", "name"+i);
	minBox.setAttribute("name", "min"+i);
	secBox.setAttribute("name", "sec"+i);


	i+=1;


	newTaskElement.appendChild(taskBox);
	newTaskElement.appendChild(minBox);
	newTaskElement.appendChild(secBox);
	tasklist.appendChild(newTaskElement);
	increment();
	return false;
}

function buttonPressed(){
	document.body.style.backgroundColor = "red";
	location.href = 'pebblejs://close#success';
}



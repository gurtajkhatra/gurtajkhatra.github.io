//Things to do:
//Delete task
//Create JSON object from the text boxes



//The task number on the list
var i = 0;


function removeTask(loTasksDiv, taskDiv){
	var task = document.getElementById(taskDiv);
	var taskList = document.getElementById(loTasksDiv);
	taskList.removeChild(task);
}

//Create new textboxes for tasks to be entered
function createTask(){
	//
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

	taskBox.setAttribute("name", "task");
	minBox.setAttribute("name", "min");
	secBox.setAttribute("name", "sec");


	i+=1;


	newTaskElement.appendChild(taskBox);
	newTaskElement.appendChild(minBox);
	newTaskElement.appendChild(secBox);
	tasklist.appendChild(newTaskElement);
	increment();
	return false;
}

//Converts time represented as minutes and seconds to that same value in seconds
function convertMinutesAndSecondsToSeconds(minutes, seconds){
	return minutes*60+seconds;
}


//Creates a JSON Object from the contents of the text boxes
function createJSONFromTextBoxes(){
	var taskNames = document.getElementsByName("task");
	var minutes = document.getElementsByName("min");
	var seconds = document.getElementsByName("sec");
	
	var jsonString = "{";
	for (int j = 0; j<taskNames.length*2-1; j++) {
		if(j%2 == 0) {
			jsonString = jsonString + j + ":" + taskNames[j/2].value + ",";
		}
		else {
			jsonString = jsonString + j + ":" + convertMinutesAndSecondsToSeconds(minutes[j/2].value, seconds[j/2].value) + ",";
		}
	}
	jsonString = jsonString + (taskNames.length*2 -1) + ":" + convertMinutesAndSecondsToSeconds(minutes[taskNames.length-1], seconds[taskNames.length-1]) + "}";
}

function buttonPressed(){
	document.body.style.backgroundColor = "red";
	location.href = 'pebblejs://close#success' + encodeURIComponent(JSON.stringify(createJSONFromTextBoxes()));
}



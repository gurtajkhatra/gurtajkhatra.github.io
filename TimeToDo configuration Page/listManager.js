//Things to do:
//Delete task
//Create JSON object from the text boxes


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

	newTaskElement.appendChild(taskBox);
	newTaskElement.appendChild(minBox);
	newTaskElement.appendChild(secBox);
	tasklist.appendChild(newTaskElement);
	return false;
}

//Converts time represented as minutes and seconds to that same value in seconds
function convertMinutesAndSecondsToSeconds(minutes, seconds){
	return parseInt(minutes*60)+parseInt(seconds);
}


//Creates a JSON Object from the contents of the text boxes
function createJSONFromTextBoxes(){
	var taskNames = document.getElementsByName("task");
	var minutes = document.getElementsByName("min");
	var seconds = document.getElementsByName("sec");
	
	var jsonString = '{\"tasks\":[';
	for (var j = 0; j<taskNames.length; j++) {
		jsonString = jsonString + '{name:' + taskNames[j].value + ',time:'+convertMinutesAndSecondsToSeconds(minutes[j].value, seconds[j].value)+ '}';
		//jsonString = jsonString + "{name:" + taskNames[j].value + ",time:" + convertMinutesAndSecondsToSeconds(minutes[j].value, seconds[j].value) + "}";
		if (j != taskNames.length-1) {
			jsonString = jsonString + ",";
		}
	}
	jsonString = jsonString + "]}";
	return jsonString;
}

//When the putton 
function pushToPebble(){
	location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(createJSONFromTextBoxes()));
}



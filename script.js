var button = document.getElementById("enter");
var list = document.getElementById("list");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// function that gets the length of the input
function inputLength() {
	return input.value.length;
}


// creates new list item as well as adding a delete button & an event listener to apply the "done" class
function createListElement() {

	// create delete button
	let deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("delete"));
	deleteButton.addEventListener("click", function() {
		li.remove()
	})

// create new items
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.appendChild(deleteButton);

	// add event listener to the newly created item that calls a function to apply the 'done' class
	li.addEventListener("click", function () {
    	li.classList.toggle("done");
  	});
	
}

//adds item when the enter button is clicked
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// adds item when the enter button is pressed
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}




button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);









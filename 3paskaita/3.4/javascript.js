function add(text) {
	let li = document.createElement("li");
	let textnode = document.createTextNode(text);
	li.appendChild(textnode);
	document.querySelector("#list").appendChild(li);
}

//console.log("labas");
document.querySelector("#add").addEventListener("click", function (e) {
e.preventDefault();


let task = document.getElementById('task').value;
add(task)
	
	

	

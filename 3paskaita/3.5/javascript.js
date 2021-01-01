document.querySelector("#field1").addEventListener("focus", function(){
	document.querySelector("#field1").style = "background-color: gold";
});

document.querySelector("#field2").addEventListener("blur", function(){
	document.querySelector("#field2").style = "background-color: red";
});

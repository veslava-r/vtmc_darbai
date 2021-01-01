document.getElementById("btn").addEventListener("click", function () {
	let metuLaikas = document.getElementById("id_of_select").value; 
	console.log(metuLaikas);
	document.querySelector("body").className = '';
	document.querySelector("body").classList.add(metuLaikas);

});

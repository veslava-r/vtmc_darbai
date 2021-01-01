document.querySelector('#btn1').addEventListener('click', function(){
	let tekstas = document.querySelector('#komforma');
	tekstas.classList.remove("d-none");
});

document.querySelector('#btn2').addEventListener('click', function(){
	let tekstas = document.querySelector('#komforma');
	tekstas.classList.add("d-none");
	alert("Dėkojame už Jūsų nuomanę.");
});




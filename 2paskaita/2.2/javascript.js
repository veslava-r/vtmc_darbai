document.querySelector('#small').addEventListener('click', function(){
	let img = document.querySelector('img');
	img.style.width = img.offsetWidth - 50 + "px";
//	img.style.width = "200px";

});

document.querySelector('#big').addEventListener('click', function(){
	let img = document.querySelector('img');
	img.style.width = img.offsetWidth + 50 + "px";
//	img.style.width = "300px";
});

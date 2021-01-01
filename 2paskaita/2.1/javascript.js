document.querySelector('.yellow').addEventListener('click', function(){
	document.querySelector('#text').className = "text-warning";
});

document.querySelector('.green').addEventListener('click', function(){
	document.querySelector('#text').className = "text-success";
});

document.querySelector('.red').addEventListener('click', function(){
	document.querySelector('#text').className = "text-danger";
});
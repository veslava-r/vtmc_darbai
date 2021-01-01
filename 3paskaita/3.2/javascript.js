
document.querySelector("#btn").addEventListener("click", function (e) {
	e.preventDefault();
	let first = document.getElementById('a').value;
	first = parseInt(first);
	let second = document.getElementById('b').value;
	second = parseInt(second);
	let sum =first +second;
	document.getElementById('sum').innerHTML=sum;

	  
});

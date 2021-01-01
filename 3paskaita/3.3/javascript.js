
document.querySelector("#btn").addEventListener("click", function (e) {
	e.preventDefault();
	let h = document.getElementById('height').value;
	h = parseFloat(h);
	let m = document.getElementById('weight').value;
	m = parseInt(m);
	let kmi =m/ (h*h);
	console.log(kmi);
	document.getElementById('kmi').innerHTML=kmi.toFixed(2);

	  
});

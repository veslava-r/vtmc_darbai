function reset() {
	document.querySelector("#img").classList.remove("float-start");
	document.querySelector("#img").classList.remove("float-end");
	document.querySelector("#img").classList.remove("d-none");

	let img = document.querySelector("#img");
	let text = document.querySelector("#text");
	let parentDiv = img.parentNode;
	parentDiv.insertBefore(img, text);
}

document.querySelector("#left").addEventListener("click", function () {
	reset();
	document.querySelector("#img").classList.add("float-start");
});

document.querySelector("#right").addEventListener("click", function () {
	reset();
	document.querySelector("#img").classList.add("float-end");
});

document.querySelector("#hide").addEventListener("click", function () {
	reset();
	document.querySelector("#img").classList.add("d-none");
});

document.querySelector("#under").addEventListener("click", function () {
	reset();
	let img = document.querySelector("#img");
	let text = document.querySelector("#text");

	let parentDiv = img.parentNode;
	parentDiv.insertBefore(text, img);
});

document.querySelector("#original").addEventListener("click", reset);

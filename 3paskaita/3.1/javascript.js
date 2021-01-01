let number = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let gueses = 0;

document.querySelector("#btn").addEventListener("click", function () {
	gueses++;
	let usernum = document.getElementById('number').value;
	usernum = parseInt(usernum);

	let out = document.getElementById('resultText')
	if (usernum == number) {
		out.innerHTML = `<b>You win!</b><br/> Number of gueses: ${gueses}`;
	} else if (usernum > number) {
		out.innerHTML = 'The guessed number is smaller';
	} else {
		out.innerHTML = 'The guessed number is bigger';
	}
});

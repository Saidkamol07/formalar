const elForm = document.querySelector('#form');
const elBox = document.querySelector('#element');
const elInput = document.querySelector('#input');
let regEX = /^[a-z A-Z0-9]{0,10}$/;
console.log(elForm);
elForm.addEventListener('submit', e => {
	e.preventDefault();
	console.log(elInput.value);
	// elBox.textContent += elForm.input.value;
	if (regEX.test(elForm.input.value)) {
		elBox.textContent = 'Chotkiy ishlavotti';
	} else {
		elBox.textContent = 'Notogri';
	}
});

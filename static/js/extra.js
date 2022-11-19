/*
 *BOTTONE DI RESET
 */

let resetButton = document.querySelector("#resetBTN");

resetButton.addEventListener("click", function (e) {
	resetting();
});

/*
 *CAMBIO COLORE ALLE LINEE
 */

let seno = document.querySelector("#redex");
let coseno = document.querySelector("#greenex");
colorSin = seno.value;
colorCos = coseno.value;

seno.addEventListener("input", function (e) {
	colorSin = seno.value;
	seno.style.backgroundColor = seno.value;
});

coseno.addEventListener("input", function (e) {
	colorCos = coseno.value;
	coseno.style.backgroundColor = coseno.value;
});

let larghezza = document.querySelector("#width");
let altezza = document.querySelector("#height");

larghezza.addEventListener("input", function (e) {
	resetting();
	w = parseInt(larghezza.value);
	setup();
});

altezza.addEventListener("input", function (e) {
	resetting();
	h = parseInt(altezza.value);
	setup();
});

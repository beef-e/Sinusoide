let ampiezza = 50;
let frequenza = 0.5;
let fase = 0;
let angle = 0;
let increment = 0.005;

function setup() {
	createCanvas(400, 400);
	background(220);
	line(0, 200, 400, 200);
	frameRate(100);
}

function draw() {
	let x = map(angle, 0, 2 * PI, 0, 400); //mappo angle dall'intervallo 0,2*PI all'intervallo 0, 400
	let y = ampiezza * sin(2 * PI * frequenza * angle + fase);
	let ycos = ampiezza * cos(2 * PI * frequenza * angle + fase);
	strokeWeight(3);
	stroke(255, 0, 0);
	point(x, y + 200);
	stroke(0, 255, 0);
	point(x, ycos + 200);
	angle = angle + increment;
}

let amplitudeInput = document.querySelector("[name=amplitude]");
let FrequencyInput = document.querySelector("[name=frequency]");
let phaseInput = document.querySelector("[name=fase]");

amplitudeInput.addEventListener("input", function (e) {
	//amplitudeInput = parseFloat(amplitudeInput);
	ampiezza = parseFloat(amplitudeInput.value);
	console.log(ampiezza);
});

FrequencyInput.addEventListener("input", function (e) {
	frequenza = parseFloat(FrequencyInput.value);
	console.log(frequenza);
});

phaseInput.addEventListener("input", function (e) {
	fase = parseFloat(phaseInput.value);
	console.log(fase);
});

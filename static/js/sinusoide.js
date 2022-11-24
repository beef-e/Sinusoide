w = 400;
h = 400;

let ampiezza = 50;
let frequenza = 0.5;
let fase = 0;
let angle = 0;
let increment = 0.005;
let colorSin;
let colorCos;

function resetting() {
	angle = 0;
	background(220);
	stroke(0, 0, 0);
	strokeWeight(1);
	line(0, h / 2, w, h / 2);
}

function setup() {
	let canvas = createCanvas(w, h);
	background(220);
	line(0, h / 2, w, h / 2);
	canvas.parent(`canvasDiv`);
	//frameRate(100);
}

function draw() {
	let x = map(angle, 0, 2 * PI, 0, 400); //mappo angle dall'intervallo 0, 2*PI all'intervallo 0, 400
	let y = ampiezza * sin(2 * PI * frequenza * angle + fase);
	let ycos = ampiezza * cos(2 * PI * frequenza * angle + fase);
	strokeWeight(3);
	stroke(`${colorSin}`);
	point(x, y + h / 2);
	stroke(`${colorCos}`);
	point(x, ycos + h / 2);
	angle = angle + increment;

	if (x >= w) {
		resetting();
	}
}

let amplitudeInput = document.querySelector('[name=amplitude]');
let FrequencyInput = document.querySelector('[name=frequency]');
let phaseInput = document.querySelector('[name=fase]');

amplitudeInput.addEventListener('input', function (e) {
	//amplitudeInput = parseFloat(amplitudeInput);
	ampiezza = parseFloat(amplitudeInput.value);
	console.log(ampiezza);
});

FrequencyInput.addEventListener('input', function (e) {
	frequenza = parseFloat(FrequencyInput.value);
	console.log(frequenza);
});

phaseInput.addEventListener('input', function (e) {
	resetting();
	fase = parseFloat(phaseInput.value);
	console.log(fase);
});

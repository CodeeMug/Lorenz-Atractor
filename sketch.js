let sigma = 10;
let beta  = 8 / 3;
let rho   = 28;

let pointsArray = [];
let DT = 0.005;

let angle = 0;


// Setup environment
function setup() {

	// Create canvas object
	let canvas = createCanvas(
		windowWidth, 
		windowHeight,
		WEBGL);

	// Populate array
	pointsArray.push(new Point(
		0.01, 0.01, 0.01, 
		[100, 255, 100]));

	pointsArray.push(new Point(
		0.02, 0.02, 0.02, 
		[255, 100, 100]));
	
	pointsArray.push(new Point(
		0.03, 0.03, 0.03, 
		[100, 100, 255]));
	
}


// Draw objects on canvas
function draw() {
	scale(map(mouseY, 0, windowHeight, 1, 15));
	rotateY(radians(angle));
	background(0);

	for (let point of pointsArray) {
		point.calcule();
		point.show();
	}
	
	angle += 0.25;
}
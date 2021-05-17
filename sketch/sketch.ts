// GLOBAL VARS & TYPES
let numberOfShapes = 15;
let speedControl: p5.Element;
let coloursArr: p5.Color[];

// P5 WILL AUTOMATICALLY USE GLOBAL MODE IF A DRAW() FUNCTION IS DEFINED
function setup() {
  console.log("🚀 - Setup initialized - P5 is running");

  // FULLSCREEN CANVAS
  createCanvas(windowWidth, windowHeight);

  // SETUP SOME OPTIONS
  rectMode(CENTER).noFill().frameRate(30);

  // SPEED SLIDER
  speedControl = createSlider(0, 15, 3, 1);
  speedControl.position(10, 10);
  speedControl.style("width", "100px");

  // COLOURS
  coloursArr = ColorHelper.getColorsArray(numberOfShapes); 
}

// p5 WILL AUTO RUN THIS FUNCTION IF THE BROWSER WINDOW SIZE CHANGES
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// p5 WILL HANDLE REQUESTING ANIMATION FRAMES FROM THE BROWSER AND WIL RUN DRAW() EACH ANIMATION FROME
function draw() {
   // CLEAR BACKGROUND
  background(0);

   // CENTER OF SCREEN
  const center = createVector(width / 2,height / 2);

  // CONSISTENT SPEED REGARDLESS OF FRAMERATE
  const baseSpeed = (frameCount / 500) * <number>speedControl.value(); 

  // DRAW ALL SHAPES
  drawShapes(center.x, center.y, baseSpeed);
}

function drawShapes(x: number, y: number, baseSpeed: number) {
  translate(x, y);
  strokeWeight(8); 
  for (var i = numberOfShapes - 1; i > 0; i--) {
    push();
    const speed = baseSpeed * (numberOfShapes - i);
    const numberOfSides = 3 + i;
    const width = 40 * i;
    drawPolygon(numberOfSides, width, coloursArr[i], speed);
    pop();
  }
}

function drawPolygon(numberOfSides: number, width: number, color: p5.Color, speed: number) {
  const angle = TWO_PI / numberOfSides;
  const radius = width / 2;
  stroke(color)
  rotate(speed);
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = cos(a) * radius;
    let sy = sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
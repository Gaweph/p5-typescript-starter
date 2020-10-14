// GLOBAL VARS & TYPES
let numberOfShapes = 15;
let speed: p5.Element;

// P5 WILL AUTOMATICALLY USE GLOBAL MODE IF A DRAW() FUNCTION IS DEFINED
function setup() {
  console.log("🚀 - Setup initialized - P5 is running");

  // FULLSCREEN CANVAS
  createCanvas(windowWidth, windowHeight);

  // SETUP SOME OPTIONS
  rectMode(CENTER).noFill().frameRate(30);

  // SPEED SLIDER
  speed = createSlider(0, 15, 3, 1);
  speed.position(10, 10);
  speed.style("width", "80px");
}

// p5 WILL HANDLE REQUESTING ANIMATION FRAMES FROM THE BROWSER AND WIL RUN DRAW() EACH ANIMATION FROME
function draw() {
  // CLEAR BACKGROUND
  background(0);
  // TRANSLATE TO CENTER OF SCREEN
  translate(width / 2, height / 2);

  const colorsArr = ColorHelper.getColorsArray(numberOfShapes);
  const baseSpeed = (frameCount / 500) * <number>speed.value();
  for (var i = 0; i < numberOfShapes; i++) {
    const npoints = 3 + i;
    const radius = 20 * i;
    const angle = TWO_PI / npoints;
    const spin = baseSpeed * (numberOfShapes - i);

    strokeWeight(3 + i).stroke(colorsArr[i]);

    push();
    rotate(spin);
    // DRAW
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = cos(a) * radius;
      let sy = sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    // END:DRAW
    pop();
  }
}

// p5 WILL AUTO RUN THIS FUNCTION IF THE BROWSER WINDOW SIZE CHANGES
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// GLOBAL VARS & TYPES
let numberOfShapes = 15;
interface ShapeType {
  color: p5.Color;
  angle: number;
  points: p5.Vector[];
}
let shapeCollection: ShapeType[];

// P5 WILL AUTOMATICALLY USE GLOBAL MODE IF A DRAW() FUNCTION IS DEFINED
function setup() {
  console.log("🚀 - Setup initialized - P5 is running");
  // FULLSCREEN CANVAS
  createCanvas(windowWidth, windowHeight);

  // SHAPES ARE DRAWN FROM THE CENTER
  rectMode(CENTER);

  // INITIALIZE THE SHAPECOLLECTION
  initShapes();

  // THIS WILL SET THE FRAMERATE TO 30.
  // NOTE: THIS IS -NOT- REQUIRED
  frameRate(30);
}

// P5 WILL HANDLE REQUESTING ANIMATION FRAMES FROM THE BROWSER AND WIL RUN DRAW() EACH ANIMATION FROME
function draw() {
  // CLEAR BACKGROUND
  background(0);
  // TRANSLATE TO CENTER OF SCREEN
  translate(width / 2, height / 2);

  // DRAW EACH SHAPE
  for (var i = 0; i < numberOfShapes; i++) {
    const shape = shapeCollection[i];

    // UPDATE SHAPE ROTATION
    shape.angle += (numberOfShapes - i) * 0.003;

    // DRAW SHAPE
    drawShape(shape);
  }

  // P5 WILL AUTO RUN THIS FUNCTION IF THE BROWSER WINDOW SIZE CHANGES
  function windowResized() {
    createCanvas(windowWidth, windowHeight);
  }
}

// INITIALIZE THE SHAPES ARRAY
function initShapes() {
  shapeCollection = <ShapeType[]>[];
  const colorsArr = ColorHelper.getColorsArray(numberOfShapes);
  for (let i = 0; i < numberOfShapes; i++) {
    const radius = 20 * i;
    shapeCollection.push(createShape(colorsArr[i], radius));
  }
}

// CREATE A SHAPE WITH THE RELEVANT COLOUR AND RADIUS
function createShape(color: p5.Color, radius: number) {
  const peakHeight = radius * 0.5;
  const centerX = 0;
  const centerY = 0;
  const numberOfPeaks = 5;
  const points = Shapes.star(
    centerX,
    centerY,
    radius,
    peakHeight,
    numberOfPeaks
  );

  return {
    color: color,
    angle: 0,
    points: points,
  };
}

// DRAW A GIVEN SHAPE TO THE CANVAS
// (NOTE: EACH SHAPE PUSHES AND POPS ITS OWN TRANSLATE TO DEAL WITH THE ANGLE)
function drawShape(shape: ShapeType) {
  // TRANSLATE
  push();
  rotate(shape.angle);

  // DRAW
  noFill();
  strokeWeight(2);
  stroke(shape.color);
  beginShape();
  for (var x = 0; x < shape.points.length; x++) {
    var v = shape.points[x];
    vertex(v.x, v.y);
  }
  endShape(CLOSE);
  // END:DRAW

  pop();
  // END: TRANSLATE
}

// GLOBAL VARS & TYPES
let numberOfShapes = 15;
let speed = 5;
let shapeCollection: Shape[];

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

// p5 WILL HANDLE REQUESTING ANIMATION FRAMES FROM THE BROWSER AND WIL RUN DRAW() EACH ANIMATION FROME
function draw() {
  // CLEAR BACKGROUND
  background(0);
  // TRANSLATE TO CENTER OF SCREEN
  translate(width / 2, height / 2);

  // DRAW EACH SHAPE
  for (var i = 0; i < numberOfShapes; i++) {
    const shape = shapeCollection[i];

    // UPDATE SHAPE ROTATION
    shape.angle += (numberOfShapes - i) * (speed / 1000);

    // DRAW SHAPE
    strokeWeight(3);
    ShapesHelper.draw(shape);
  }

  // p5 WILL AUTO RUN THIS FUNCTION IF THE BROWSER WINDOW SIZE CHANGES
  function windowResized() {
    createCanvas(windowWidth, windowHeight);
  }
}

// INITIALIZE THE SHAPES ARRAY
function initShapes() {
  shapeCollection = [];
  const colorsArr = ColorHelper.getColorsArray(numberOfShapes);
  for (let i = 0; i < numberOfShapes; i++) {
    const radius = 20 * i;
    // shapeCollection.push(ShapesHelper.StarShape(radius, colorsArr[i]));
    shapeCollection.push(
      ShapesHelper.PolygonShape(radius, colorsArr[i], 3 + i)
    );
  }
}

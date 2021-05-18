// GLOBAL VARS & TYPES
let numberOfShapesControl: p5.Element;
let Shapes: Polygon[];

// P5 WILL AUTOMATICALLY USE GLOBAL MODE IF A DRAW() FUNCTION IS DEFINED
function setup() {
  console.log("🚀 - Setup initialized - P5 is running");

  // FULLSCREEN CANVAS
  createCanvas(windowWidth, windowHeight);

  // SETUP SOME OPTIONS
  rectMode(CENTER).noFill().frameRate(30);

  // NUMBER OF SHAPES SLIDER
  numberOfShapesControl = 
    createSlider(1, 30, 15, 1)
      .position(10, 10)
      .style("width", "100px")
      // CHANGE NUMBER OF SHAPES EVENTS
      .mouseMoved(setupShapes)
      .touchMoved(setupShapes);
  (<HTMLElement>numberOfShapesControl.elt).addEventListener("change", setupShapes);
  setupShapes();
}


// p5 WILL AUTO RUN THIS FUNCTION IF THE BROWSER WINDOW SIZE CHANGES
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// p5 WILL HANDLE REQUESTING ANIMATION FRAMES FROM THE BROWSER AND WIL RUN DRAW() EACH ANIMATION FROME
function draw() {
   // CLEAR BACKGROUND
  background(0);

  // CONSISTENT SPEED REGARDLESS OF FRAMERATE
  const speed = (frameCount / (Shapes.length * 30)) * 3;

  // CENTER OF SCREEN
  translate(width / 2,height / 2);

  // DRAW ALL SHAPES
  push();
    for (var i = 0; i < Shapes.length; i++) {
      rotate(speed);
      Shapes[i].draw();
    }
  pop();
}

function getColours() {
  const numberOfPolygons = <number>numberOfShapesControl.value();
  return ColorHelper.getColorsArray(numberOfPolygons); 
}

function setupShapes() {
  const numberOfPolygons = <number>numberOfShapesControl.value();
  const colours = getColours();
  Shapes = [];
  //Create Shapes Array
  for (var i = numberOfPolygons - 1; i > 0; i--) {
    const numberOfSides = 3 + i;
    const width = 40 * i;
    const lineWidth = 8;
    const colour =  colours[i];
    Shapes.push(new Polygon(numberOfSides, width, colour, lineWidth))
  }
}
// GLOBAL VARS & TYPES
let numberOfShapes = 15;
let speedControl: p5.Element;
let numberOfShapesControl: p5.Element;
let coloursArr: p5.Color[];
let Shapes: Polygon[];
// P5 WILL AUTOMATICALLY USE GLOBAL MODE IF A DRAW() FUNCTION IS DEFINED
function setup() {
  console.log("🚀 - Setup initialized - P5 is running");

  // FULLSCREEN CANVAS
  createCanvas(windowWidth, windowHeight);

  // SETUP SOME OPTIONS
  rectMode(CENTER).noFill().frameRate(30);

  // SPEED SLIDER
  numberOfShapesControl = createSlider(1, 30, 15, 1).position(10, 10).style("width", "100px");
  speedControl = createSlider(0, 15, 3, 1).position(10, 40).style("width", "100px");

  (<HTMLElement>numberOfShapesControl.elt).addEventListener("change", setupShapesArray);

  setupShapesArray();
}

function setupShapesArray() {

  // COLOURS
  const numberOfShapes = <number>numberOfShapesControl.value();
  coloursArr = ColorHelper.getColorsArray(numberOfShapes); 
  
  //Create Shapes Array
  Shapes = [];
  for (var i = numberOfShapes - 1; i > 0; i--) {
    const numberOfSides = 3 + i;
    const width = 40 * i;
    const lineWidth = 8;
    const colour =  coloursArr[i];
    Shapes.push(new Polygon(numberOfSides, width, colour, lineWidth))
  }
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
  const speed = (frameCount / (<number>numberOfShapesControl.value() * 30)) * 3;/// * <number>speedControl.value(); 

  // DRAW ALL SHAPES
  push();
    translate(center);
    for (var i = 0; i < Shapes.length; i++) {
      rotate(speed);
      Shapes[i].draw();
    }
  pop();
}
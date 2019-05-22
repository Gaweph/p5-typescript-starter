let morph: Morph;
function setup() {
    createCanvas(windowWidth, windowHeight)
    morph = new Morph();
    morph.setup();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(100);
    morph.draw();
}
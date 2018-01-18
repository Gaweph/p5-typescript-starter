var p = new p5();
function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
}
function windowResized() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
}
function draw() {
    p.background(100);
    p.stroke(0);
    p.strokeWeight(2);
    p.fill(255);
    p.rect(10, 10, 50, 50);
}
//# sourceMappingURL=sketch.js.map
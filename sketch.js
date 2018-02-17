var sketch = (p) => {
    p.preload = () => {
    };
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    //demo vars
    let positionX = 10;
    let positionY = 10;
    let cubeSize = 50;
    p.draw = () => {
        p.background(100);
        p.stroke(0);
        p.strokeWeight(2);
        p.fill(255);
        // Draw Cube
        p.rect(positionX, positionY, cubeSize, cubeSize);
    };
};
var p = new p5(sketch);
//# sourceMappingURL=sketch.js.map
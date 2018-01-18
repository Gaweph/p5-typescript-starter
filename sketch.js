var sketch = (p) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    p.draw = () => {
        p.background(100);
        p.stroke(0);
        p.strokeWeight(2);
        p.fill(255);
        p.rect(10, 10, 50, 50);
    };
};
var p = new p5(sketch);
//# sourceMappingURL=sketch.js.map
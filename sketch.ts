var sketch = (p:p5) => {

    p.preload = () => {

    }
    
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    }
    
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
    
    //demo vars
    let positionX = 10;
    let positionY = 10;
    let cubeSize = 50;

    // const ccc = p.color(10);
    p.draw = () => {
        p.background(100);
        p.stroke(p.color(0));
        p.strokeWeight(2);
        p.fill(p.color(255));
        // Draw Cube
        p.rect(positionX,positionY,cubeSize,cubeSize);
        
    }
}

var p = new p5(sketch);
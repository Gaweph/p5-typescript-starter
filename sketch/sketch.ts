var sketch = (p:p5) => {

    this.morph = new Morph();

    p.preload = () => {

    }
    
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        this.morph.setup(p);
    }
    
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
    
    //demo vars
    let positionX = 10;
    let positionY = 10;
    let cubeSize = 50;

    p.draw = () => {
        p.background(100);
        this.morph.draw(p);        
    }
}

var p = new p5(sketch);
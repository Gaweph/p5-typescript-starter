class Polygon {
    constructor(
        private numberOfSides: number,
        private width: number,
        private color: p5.Color,
        private lineWidth: number
        ) { }

  public draw() {
    push();    
      strokeWeight(this.lineWidth); 
        const angle = TWO_PI / this.numberOfSides;
        const radius = this.width / 2;
        stroke(this.color);
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
        let sx = cos(a) * radius;
        let sy = sin(a) * radius;
        vertex(sx, sy);
        }
        endShape(CLOSE);
    pop();
  }
}

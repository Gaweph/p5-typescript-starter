//https://processing.org/examples/morph.html
class Morph {

  // Arrays to store the vertices for the shapes
  shapes: { points: p5.Vector[], color: p5.Color }[];
  currentShape: number;
  // An array for the set of vertices beign drawn into the window
  morph: p5.Vector[];

  // This boolean variable will control if we are morphing to a circle or square

  setup() {

    // Setup shapes array
    this.shapes = [];
    this.currentShape = 0;
    this.shapes.push({ points: Shapes.circle(100), color: color('#009CDF') });
    this.shapes.push({ points: Shapes.circle(150), color: color(255, 204, 0) });
    this.shapes.push({ points: Shapes.square(50), color: color(175, 100, 220) });
    // this.shapes.push({points: Shapes.star(p, 0, 0, 30, 70, 5), color: color('#E23838')});

    // setup morph array
    this.morph = new Array<p5.Vector>();
    let highestCount = 0;
    for (var i = 0; i < this.shapes.length; i++) {
      highestCount = Math.max(highestCount, this.shapes[i].points.length);
    }
    for (var i = 0; i < highestCount; i++) {
      this.morph.push(new p5.Vector());
    }
  }

  recalc() {
    // We will keep how far the vertices are from their target
    var totalDistance = 0;

    // Look at each vertex
    const points = this.shapes[this.currentShape].points;
    for (var i = 0; i < points.length; i++) {
      // Are we lerping to the circle or square?
      var v1 = points[i];
      // Get the vertex we will draw
      var v2 = this.morph[i];
      // Lerp to the target
      v2.lerp(v1, 0.1);
      // Check how far we are from target
      totalDistance += p5.Vector.dist(v1, v2);
    }

    // If all the vertices are close, switch shape
    if (totalDistance < 0.1) {
      this.currentShape++;//= !this.state;
      if (this.currentShape >= this.shapes.length) {
        this.currentShape = 0;
      }
    }
  }

  draw() {
    this.recalc();

    const color = this.shapes[this.currentShape].color;
    const points = this.shapes[this.currentShape].points;

    // Draw relative to center
    translate(width / 2, height / 2);
    strokeWeight(4);
    // Draw a polygon that makes up all the vertices
    beginShape();
    noFill();

    stroke(color);
    for (var i = 0; i < points.length; i++) {
      var v = this.morph[i];
      vertex(v.x, v.y);
    }

    endShape(CLOSE);

  }

}
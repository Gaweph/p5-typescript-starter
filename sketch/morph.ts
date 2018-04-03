//https://processing.org/examples/morph.html
class Morph {

    
// Two Arrays to store the vertices for two shapes
// This example assumes that each shape will have the same
// number of vertices, i.e. the size of each Array will be the same
circle = new Array<p5.Vector>();
square = new Array<p5.Vector>();

// An Array for a third set of vertices, the ones we will be drawing
// in the window
morph = new Array<p5.Vector>();

// This boolean variable will control if we are morphing to a circle or square
state = false;

setup(p: p5) {
  // size(640, 360);

  // Create a circle using vectors pointing from center
  for (var angle = 0; angle < 360; angle += 9) {
    // Note we are not starting from 0 in order to match the
    // path of a circle.  
    var v = p5.Vector.fromAngle(p.radians(angle-135));
    v.mult(100);
    this.circle.push(v);
    // Let's fill out morph Array with blank p5.Vectors while we are at it
    this.morph.push(new p5.Vector());
  }

  // A square is a bunch of vertices along straight lines
  // Top of square
  for (var x = -50; x < 50; x += 10) {
    this.square.push(new p5.Vector(x, -50));
  }
  // Right side
  for (var y = -50; y < 50; y += 10) {
    this.square.push(new p5.Vector(50, y));
  }
  // Bottom
  for (var x = 50; x > -50; x -= 10) {
    this.square.push(new p5.Vector(x, 50));
  }
  // Left side
  for (var y = 50; y > -50; y -= 10) {
    this.square.push(new p5.Vector(-50, y));
  }
}

draw(p: p5) {
  // background(51);

  // We will keep how far the vertices are from their target
  var totalDistance = 0;
  
  // Look at each vertex
  for (var i = 0; i < this.circle.length; i++) {
    var v1: p5.Vector;
    // Are we lerping to the circle or square?
    if (this.state) {
      v1 = this.circle[i];
    }
    else {
      v1 = this.square[i];
    }
    // Get the vertex we will draw
    var v2 = this.morph[i];
    // Lerp to the target
    v2.lerp(v1, 0.1);
    // Check how far we are from target
    totalDistance += p5.Vector.dist(v1, v2);
  }
  
  // If all the vertices are close, switch shape
  if (totalDistance < 0.1) {
    this.state = !this.state;
  }
  
  // Draw relative to center
  p.translate(p.width/2, p.height/2);
  p.strokeWeight(4);
  // Draw a polygon that makes up all the vertices
  p.beginShape();
  p.noFill();
  p.stroke(p.color(255));
  
  for(var i = 0 ; i < this.morph.length; i++ ){
      var v = this.morph[i];
      p.vertex(v.x, v.y);
  }
  p.endShape((<any>p5).CLOSE);
}


}
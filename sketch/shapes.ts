class Shapes {

  static circle(p: p5, size: number): p5.Vector[] {

    // Create a circle using vectors pointing from center
    const points = new Array<p5.Vector>();
    for (var angle = 0; angle < 360; angle += 9) {
      // Note we are not starting from 0 in order to match the
      // path of a circle.  
      var v = p5.Vector.fromAngle(p.radians(angle - 135));
      v.mult(size);
      points.push(v);
    }

    return points;
  }

  static square(p: p5, size: number): p5.Vector[] {
    const points = new Array<p5.Vector>();
    // A square is a bunch of vertices along straight lines
    // Top of square
    for (var x = -size; x < size; x += 10) {
      points.push(p.createVector(x, -size));
    }
    // Right side
    for (var y = -size; y < size; y += 10) {
      points.push(p.createVector(size, y));
    }
    // Bottom
    for (var x = size; x > -size; x -= 10) {
      points.push(p.createVector(x, size));
    }
    // Left side
    for (var y = size; y > -size; y -= 10) {
      points.push(p.createVector(-size, y));
    }

    return points;
  }

  // star(0, 0, 30, 70, 5); 
  static star(p: p5, x: number, y: number, radius1: number, radius2: number, npoints: number): p5.Vector[] {
    var angle = p.TWO_PI / npoints;
    var halfAngle = angle / 2.0;

    const points = new Array<p5.Vector>();
    for (var a = 0; a < p.TWO_PI; a += angle) {
      var sx = x + p.cos(a) * radius2;
      var sy = y + p.sin(a) * radius2;
      points.push(p.createVector(sx, sy));
      sx = x + p.cos(a + halfAngle) * radius1;
      sy = y + p.sin(a + halfAngle) * radius1;
      points.push(p.createVector(sx, sy));
    }

    return points;
  }
}
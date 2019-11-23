class Shapes {
  static star(x: number, y: number, radius1: number, radius2: number, npoints: number): p5.Vector[] {
    var angle = TWO_PI / npoints;
    var halfAngle = angle / 2.0;

    const points = new Array<p5.Vector>();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius2;
      var sy = y + sin(a) * radius2;
      points.push(createVector(sx, sy));
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      points.push(createVector(sx, sy));
    }

    return points;
  }
}
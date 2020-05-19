interface Shape {
  color: p5.Color;
  angle: number;
  points: p5.Vector[];
}

class ShapesHelper {
  // DRAW A GIVEN SHAPE TO THE CANVAS
  // (NOTE: EACH SHAPE PUSHES AND POPS ITS OWN TRANSLATE TO DEAL WITH THE ANGLE)
  static draw(shape: Shape) {
    // TRANSLATE
    push();
    rotate(shape.angle);

    // DRAW
    noFill();
    strokeWeight(2);
    stroke(shape.color);
    beginShape();
    for (var x = 0; x < shape.points.length; x++) {
      var v = shape.points[x];
      vertex(v.x, v.y);
    }
    endShape(CLOSE);
    // END:DRAW

    pop();
    // END: TRANSLATE
  }

  static PolygonShape(size: number, color: p5.Color, sides: number) {
    return <Shape>{
      color: color,
      angle: 0,
      points: ShapesHelper.getPolygonPoints(
        size, // radius
        sides // numberOfSides
      ),
    };
  }

  static StarShape(size: number, color: p5.Color) {
    return <Shape>{
      color: color,
      angle: 0,
      points: ShapesHelper.getStarPoints(
        size, // radius
        size * 0.5, // peakHeight
        5 // numberOfPoints
      ),
    };
  }

  private static getPolygonPoints(radius: number, numberOfSides: number) {
    let angle = TWO_PI / numberOfSides;
    const points = new Array<p5.Vector>();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = cos(a) * radius;
      let sy = sin(a) * radius;
      points.push(createVector(sx, sy));
    }
    return points;
  }

  // RETURNS ARRAY OF POINTS THAT CREATE A STAR SHAPE
  private static getStarPoints(
    radius = 0,
    peakHeight = 0,
    numberOfPoints = 5
  ): p5.Vector[] {
    var angle = TWO_PI / numberOfPoints;
    var halfAngle = angle / 2.0;

    const points = new Array<p5.Vector>();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = cos(a) * peakHeight;
      var sy = sin(a) * peakHeight;
      points.push(createVector(sx, sy));
      sx = cos(a + halfAngle) * radius;
      sy = sin(a + halfAngle) * radius;
      points.push(createVector(sx, sy));
    }

    return points;
  }
}

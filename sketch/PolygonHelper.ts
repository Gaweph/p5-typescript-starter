class PolygonHelper {
  public static draw(numberOfSides: number, width: number) {
    push();    
        const angle = TWO_PI / numberOfSides;
        const radius = width / 2;
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

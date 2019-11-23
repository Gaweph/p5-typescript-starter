let angle = 0;
let squares = 10;
let colors: p5.Color[];

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    colors = ColorHelper.getColorsArray(squares);
}

function draw() {

    background(51);

    translate((width / 2), (height / 2));
    angle = angle + 0.01;
    rotate(angle);

    for (var i = 0; i < squares; i++) {
        strokeWeight(2);
        stroke(colors[i]);
        noFill();
        beginShape();

        let points = Shapes.star(0, 0, 10 * i, 20 * i, 5);
        for (var x = 0; x < points.length; x++) {
            var v = points[x]
            vertex(v.x, v.y);
        }
        endShape(CLOSE);
    }

}

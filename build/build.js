var ColorHelper = (function () {
    function ColorHelper() {
    }
    ColorHelper.getColorVector = function (c) {
        return createVector(red(c), green(c), blue(c));
    };
    ColorHelper.rainbowColorBase = function () {
        return [
            color('red'),
            color('orange'),
            color('yellow'),
            color('green'),
            color(38, 58, 150),
            color('indigo'),
            color('violet')
        ];
    };
    ColorHelper.getColorsArray = function (total, baseColorArray) {
        var _this = this;
        if (baseColorArray === void 0) { baseColorArray = null; }
        if (baseColorArray == null) {
            baseColorArray = ColorHelper.rainbowColorBase();
        }
        var rainbowColors = baseColorArray.map(function (x) { return _this.getColorVector(x); });
        ;
        var colours = new Array();
        for (var i = 0; i < total; i++) {
            var colorPosition = i / total;
            var scaledColorPosition = colorPosition * (rainbowColors.length - 1);
            var colorIndex = Math.floor(scaledColorPosition);
            var colorPercentage = scaledColorPosition - colorIndex;
            var nameColor = this.getColorByPercentage(rainbowColors[colorIndex], rainbowColors[colorIndex + 1], colorPercentage);
            colours.push(color(nameColor.x, nameColor.y, nameColor.z));
        }
        return colours;
    };
    ColorHelper.getColorByPercentage = function (firstColor, secondColor, percentage) {
        var firstColorCopy = firstColor.copy();
        var secondColorCopy = secondColor.copy();
        var deltaColor = secondColorCopy.sub(firstColorCopy);
        var scaledDeltaColor = deltaColor.mult(percentage);
        return firstColorCopy.add(scaledDeltaColor);
    };
    return ColorHelper;
}());
var Shapes = (function () {
    function Shapes() {
    }
    Shapes.star = function (x, y, radius1, radius2, npoints) {
        var angle = TWO_PI / npoints;
        var halfAngle = angle / 2.0;
        var points = new Array();
        for (var a = 0; a < TWO_PI; a += angle) {
            var sx = x + cos(a) * radius2;
            var sy = y + sin(a) * radius2;
            points.push(createVector(sx, sy));
            sx = x + cos(a + halfAngle) * radius1;
            sy = y + sin(a + halfAngle) * radius1;
            points.push(createVector(sx, sy));
        }
        return points;
    };
    return Shapes;
}());
var numberOfShapes = 15;
var shapeCollection;
function setup() {
    console.log("🚀 - Setup initialized - P5 is running");
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    initShapes();
    frameRate(30);
}
function draw() {
    background(0);
    translate(width / 2, height / 2);
    for (var i = 0; i < numberOfShapes; i++) {
        var shape = shapeCollection[i];
        shape.angle += (numberOfShapes - i) * 0.003;
        drawShape(shape);
    }
    function windowResized() {
        createCanvas(windowWidth, windowHeight);
    }
}
function initShapes() {
    shapeCollection = [];
    var colorsArr = ColorHelper.getColorsArray(numberOfShapes);
    for (var i = 0; i < numberOfShapes; i++) {
        var radius = 20 * i;
        shapeCollection.push(createShape(colorsArr[i], radius));
    }
}
function createShape(color, radius) {
    var peakHeight = radius * 0.5;
    var centerX = 0;
    var centerY = 0;
    var numberOfPeaks = 5;
    var points = Shapes.star(centerX, centerY, radius, peakHeight, numberOfPeaks);
    return {
        color: color,
        angle: 0,
        points: points,
    };
}
function drawShape(shape) {
    push();
    rotate(shape.angle);
    noFill();
    strokeWeight(2);
    stroke(shape.color);
    beginShape();
    for (var x = 0; x < shape.points.length; x++) {
        var v = shape.points[x];
        vertex(v.x, v.y);
    }
    endShape(CLOSE);
    pop();
}
//# sourceMappingURL=build.js.map
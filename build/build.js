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
var ShapesHelper = (function () {
    function ShapesHelper() {
    }
    ShapesHelper.draw = function (shape) {
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
    };
    ShapesHelper.PolygonShape = function (size, color, sides) {
        return {
            color: color,
            angle: 0,
            points: ShapesHelper.getPolygonPoints(size, sides),
        };
    };
    ShapesHelper.StarShape = function (size, color) {
        return {
            color: color,
            angle: 0,
            points: ShapesHelper.getStarPoints(size, size * 0.5, 5),
        };
    };
    ShapesHelper.getPolygonPoints = function (radius, numberOfSides) {
        var angle = TWO_PI / numberOfSides;
        var points = new Array();
        for (var a = 0; a < TWO_PI; a += angle) {
            var sx = cos(a) * radius;
            var sy = sin(a) * radius;
            points.push(createVector(sx, sy));
        }
        return points;
    };
    ShapesHelper.getStarPoints = function (radius, peakHeight, numberOfPoints) {
        if (radius === void 0) { radius = 0; }
        if (peakHeight === void 0) { peakHeight = 0; }
        if (numberOfPoints === void 0) { numberOfPoints = 5; }
        var angle = TWO_PI / numberOfPoints;
        var halfAngle = angle / 2.0;
        var points = new Array();
        for (var a = 0; a < TWO_PI; a += angle) {
            var sx = cos(a) * peakHeight;
            var sy = sin(a) * peakHeight;
            points.push(createVector(sx, sy));
            sx = cos(a + halfAngle) * radius;
            sy = sin(a + halfAngle) * radius;
            points.push(createVector(sx, sy));
        }
        return points;
    };
    return ShapesHelper;
}());
var numberOfShapes = 15;
var speed = 5;
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
        shape.angle += (numberOfShapes - i) * (speed / 1000);
        ;
        ShapesHelper.draw(shape);
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
        shapeCollection.push(ShapesHelper.PolygonShape(radius, colorsArr[i], 3 + i));
    }
}
//# sourceMappingURL=build.js.map
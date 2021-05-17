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
var numberOfShapes = 15;
var speedControl;
var coloursArr;
function setup() {
    console.log("🚀 - Setup initialized - P5 is running");
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER).noFill().frameRate(30);
    speedControl = createSlider(0, 15, 3, 1);
    speedControl.position(10, 10);
    speedControl.style("width", "100px");
    coloursArr = ColorHelper.getColorsArray(numberOfShapes);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    var center = createVector(width / 2, height / 2);
    var baseSpeed = (frameCount / 500) * speedControl.value();
    drawShapes(center.x, center.y, baseSpeed);
}
function drawShapes(x, y, baseSpeed) {
    translate(x, y);
    strokeWeight(8);
    for (var i = numberOfShapes - 1; i > 0; i--) {
        push();
        var speed = baseSpeed * (numberOfShapes - i);
        var numberOfSides = 3 + i;
        var width_1 = 40 * i;
        drawPolygon(numberOfSides, width_1, coloursArr[i], speed);
        pop();
    }
}
function drawPolygon(numberOfSides, width, color, speed) {
    var angle = TWO_PI / numberOfSides;
    var radius = width / 2;
    stroke(color);
    rotate(speed);
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = cos(a) * radius;
        var sy = sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
//# sourceMappingURL=../sketch/sketch/build.js.map
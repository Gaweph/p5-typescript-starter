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
var Polygon = (function () {
    function Polygon(numberOfSides, width, color, lineWidth) {
        this.numberOfSides = numberOfSides;
        this.width = width;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    Polygon.prototype.draw = function () {
        push();
        strokeWeight(this.lineWidth);
        var angle = TWO_PI / this.numberOfSides;
        var radius = this.width / 2;
        stroke(this.color);
        beginShape();
        for (var a = 0; a < TWO_PI; a += angle) {
            var sx = cos(a) * radius;
            var sy = sin(a) * radius;
            vertex(sx, sy);
        }
        endShape(CLOSE);
        pop();
    };
    return Polygon;
}());
var numberOfShapes = 15;
var speedControl;
var coloursArr;
var Shapes;
function setup() {
    console.log("🚀 - Setup initialized - P5 is running");
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER).noFill().frameRate(30);
    speedControl = createSlider(0, 15, 3, 1);
    speedControl.position(10, 10);
    speedControl.style("width", "100px");
    coloursArr = ColorHelper.getColorsArray(numberOfShapes);
    Shapes = [];
    for (var i = numberOfShapes - 1; i > 0; i--) {
        var numberOfSides = 3 + i;
        var width_1 = 40 * i;
        var lineWidth = 8;
        var colour = coloursArr[i];
        Shapes.push(new Polygon(numberOfSides, width_1, colour, lineWidth));
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    var center = createVector(width / 2, height / 2);
    var speed = (frameCount / 500) * speedControl.value();
    push();
    translate(center);
    for (var i = 0; i < Shapes.length; i++) {
        rotate(speed);
        Shapes[i].draw();
    }
    pop();
}
//# sourceMappingURL=../sketch/sketch/build.js.map
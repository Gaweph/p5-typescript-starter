# Starter Project

## p5.js with Typescript

Project to quickly get something working in [p5.js](https://p5js.org/) and [typescript](https://www.typescriptlang.org/)

## Demo

## **[Click here for Demo](https://gaweph.github.io/p5-typescript-starter/)**

![Demo](p5-typescript-demo.png?raw=true "Demo")

This is based on the [Regular Polygon](https://p5js.org/examples/form-regular-polygon.html) sketch available in the p5js examples

## Getting Started

### Installing

```
git clone https://github.com/Gaweph/p5-typescript-starter.git
```

```
npm install
```

### Usage

```
npm start
```

A local version will now be running on [localhost:3000](http://localhost:3000)

## Global and Instanced mode

P5 is able to run in either global or instanced mode.
https://github.com/processing/p5.js/wiki/Global-and-instance-mode

This starter project now uses **Global mode** to bring it inline with most of the online resources provided by the project.

As stated on the P5 wiki:

> While this is convenient (and friendlier) it's important to note that this can lead to problems and confusion down the road when mixing other JS libraries or trying to embed multiple p5 sketches on the same page. A safer, more advanced methodology is to create a p5 sketch as an object "instance".

The following examples are both functionaly the same.

### Global Mode

```typescript
let x = 100;
let y = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  rect(x, y, 50, 50);
}
```

### Instanced Mode

```typescript
var sketch = (p: p5) => {
  this.x = 100;
  this.y = 100;
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(this.x, this.y, 50, 50);
  };
};

new p5(sketch);
```

This starter project will work with either mode, feel free to experiment with both.

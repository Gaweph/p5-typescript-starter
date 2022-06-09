
# P5 TypeScript Starter

This project will quickly get you something working in [p5.js](https://p5js.org/) and [typescript](https://www.typescriptlang.org/).

## Demo

**[Click here for Demo](https://gaweph.github.io/p5-typescript-starter/)**

![Demo](https://gaweph.github.io/p5-typescript-starter/p5-typescript-demo.png?raw=true "Demo")

This demo is based on the [Regular Polygon](https://p5js.org/examples/form-regular-polygon.html) sketch available in the p5js examples.

## Getting Started

### Installing

```
git clone https://github.com/Gaweph/p5-typescript-starter.git
```

```
npm install
```

### Using

```
npm start
```

A local version will now be running on [localhost:3000](http://localhost:3000).

## Advanced

### Global and Instanced Modes

P5 is able to run in either [global or instance mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode).

This starter project uses **global mode** by default to bring it in line with most of the online resources provided by the project. 

As stated on the P5 wiki:

> While this is convenient (and friendlier) it's important to note that this can lead to problems and confusion down the road when mixing other JS libraries or trying to embed multiple p5 sketches on the same page. A safer, more advanced methodology is to create a p5 sketch as an object "instance".

The following examples are both functionally the same.

#### Global Mode

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

#### Instanced Mode

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

### Using External Libraries

To use an external library, e.g. [qrcode-generator](https://www.npmjs.com/package/qrcode-generator).

1. Install the library with `npm install --save-dev qrcode-generator`.

2. Add a `script` tag to your `index.html`.

   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"></script>
   ```

3. Import via `global.d.ts`.

   ```typescript
   import qrcode = require('qrcode-generator');
   ```

4. Use in `sketch.ts`.

   ```typescript
   var qr = qrcode(4, 'L');
   qr.addData('https://github.com/Gaweph/p5-typescript-starter');
   qr.make();

   text(qr.createASCII(), 1, 1);
   ```

See [dblock/p5qr](https://github.com/dblock/p5qr) for a working sample.

## Copyright and License

MIT License, see [LICENSE](https://github.com/Gaweph/p5-typescript-starter/blob/master/LICENSE) for details.

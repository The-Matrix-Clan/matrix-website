var streams = [],
  letterScale = 25;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (var t = 0, e = 0; e <= width / letterScale; e++) {
    var i = new Stream();
    i.generateSymbols(t, random(-window.innerHeight, 0)),
      streams.push(i),
      (t += letterScale);
  }
  textSize(letterScale);
}

function draw() {
  background(5, 120),
    streams.forEach(function (t) {
      t.render();
    });
}

function Symbol(t, e, i, n, r) {
  (this.x = t),
    (this.y = e),
    this.value,
    (this.speed = i),
    (this.firstLetter = n),
    (this.opacity = r),
    (this.interval = round(random(3, 30))),
    (this.generateRandom = function () {
      if (frameCount % this.interval == 0) {
        //this.value = random(['P','s','y','n','a','p','s','e']);
        this.value = random(['c', 'o', 'g', 'n', 'i', 't', 'i', 'o', 'n', 'e', 'm']); //cognition + emotion
      }
    }),
    (this.render = function () {
      this.generateRandom(),
        text(this.value, this.x, this.y),
        fill(0, 255, 0),
        this.rain();
    }),
    (this.rain = function () {
      this.y > height + letterScale ? (this.y = 0) : (this.y += this.speed);
      this.opacity = map(this.y, 0, height, 255, 0); // Adjust opacity based on position

    });
}

function Stream() {
  (this.symbols = []),
    (this.range = round(random(10, 40))),
    (this.speed = random(2, 8)),
    (this.generateSymbols = function (t, e) {
      for (var i = !0, n = 255, r = 0; r <= this.range; r++)
        (symbol = new Symbol(t, e, this.speed, i, n)),
          symbol.generateRandom(),
          this.symbols.push(symbol),
          (n -= 255 / this.range),
          (e -= letterScale),
          (i = !1);
    }),
    (this.render = function () {
      this.symbols.forEach(function (t) {
        t.firstLetter
          ? fill(205, 139, 251, t.opacity)
          : fill(205, 139, 251, t.opacity),
          text(t.value, t.x, t.y),
          t.rain(),
          t.generateRandom();
      });
    });
}

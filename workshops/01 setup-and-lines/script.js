var points = [];

function addPoints() {
    for (var i = 0; i < 100; i++) {
      points[i] = Math.random() * innerWidth;
    }
}

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {

}

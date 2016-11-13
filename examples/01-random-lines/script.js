var points = [];

function setup() {
  createCanvas(innerWidth, innerHeight);

  // Add 5000 random points to our points array
  for (var i = 0; i < 5000; i++) {
    points[i] = createVector(random(innerWidth), random(innerHeight))
  }
}

function draw() {
  clear();
  // Loop over every point in our points array
  for (var i = 0; i < points.length - 1; i++) {

    // Draw a line for each to point to the next point in the array
    line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y)

    // Generate a new random x and y coordinate for each point
    points[i].x = random(innerWidth)
    points[i].y = random(innerHeight)

  }
}

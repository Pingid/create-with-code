# Drawing random lines

For the first project we are going to get used to using the 'setup()' and 'draw()' functions. These are functions we have to declare within our code but p5 calls for us. The 'setup()' function gets called once when the page is loaded and this is where we call the ```createCanvas``` function. The canvas is an html element which allows us to draw shapes. When we call 'createCanvas()' we need to give it the width and height in pixels of the canvas we want. p5 gives us the current width and height of the screen as variables 'innerWidth' and 'innerHeight' respectively. If we want our canvas to fill the whole screen our setup function would look like this.

```javascript
function setup() {
  createCanvas(innerWidth, innerHeight)
}
```

The 'draw()' function gets called on a loop around 60 times a second. Inside the draw function is where we draw our shapes to the canvas. p5 has varius shapes that we can use and they can be seen [here](http://p5js.org/reference/#group-Shape). Bellow I am drawing a few of the shapes offered to us by p5.

```javascript
function draw() {
  //   x1   y1   x2   y2
  line(100, 100, 500, 500)

  //      x1   y1   radius
  ellipse(200, 300, 100)

  //   x1   y1  width height
  rect(200, 300, 150, 150)
}
```

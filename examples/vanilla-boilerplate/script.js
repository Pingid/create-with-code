var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouseX = 0;
var mouseY = 0

window.addEventListener('mousemove', function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
})

function draw() {
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 50, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
}

function loop() {
  window.requestAnimationFrame(loop);
  draw();
}
window.requestAnimationFrame(loop);

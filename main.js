

function Start() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  COURSE.initialized = true;
  BALL.image.src = "golfBall.png";
  GAME.started = true;
  // renderHole(context);
}

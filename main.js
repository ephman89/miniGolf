

function Start() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  COURSE.initialized = true;
  BALL.image.src = "golfBall.png";
  GAME.started = true;
  GAME.level = 1;

  renderHole(context);
  renderSandtraps(context);
  context.font = "30px Arial";
  context.fillText(""+ GAME.level, 50, 20);
}

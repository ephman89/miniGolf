

function Start() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  COURSE.initialized = true;
  BALL.image.src = "golfBall.png";
  GAME.started = true;
  GAME.level = 1;

  runGame();
  context.font = "30px Arial";
  context.fillText("Level:"+ GAME.level + " Strokes :" + BALL.strokes, 50, 20);
}

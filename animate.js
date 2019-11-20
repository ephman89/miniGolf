
function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {


    animateBallMovement();

    context.clearRect(0,0,600,300);
    renderHole(context);
    renderBall(context);
    //renderCourse(context):
    if (
        BALL.x >= HOLE.xPos &&
        BALL.x <= (HOLE.xPos + HOLE.w) &&
        BALL.y >= HOLE.yPos &&
        BALL.y <= (HOLE.yPos + HOLE.h)){
      BALL.x = 100;
      BALL.y = 100;
      GAME.level = GAME.level + 1;
    }


    
  }

  else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);

  }
  window.requestAnimationFrame(runGame);

}

window.requestAnimationFrame(runGame);

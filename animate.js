
function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {


    animateBallMovement();

    context.clearRect(0,0,600,300);
    //renderHole(context);
    renderBall(context);
    //renderCourse(context):
  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);

  }
  window.requestAnimationFrame(runGame);
  window.requestAnimationFrame(animateBallMovement);
}

window.requestAnimationFrame(runGame);

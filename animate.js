
function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {


    animateBallMovement();

    context.clearRect(0,0,600,300);

    if (
        BALL.x >= HOLE.xPos &&
        BALL.x <= (HOLE.xPos + HOLE.w) &&
        BALL.y >= HOLE.yPos &&
        BALL.y <= (HOLE.yPos + HOLE.h)){
      BALL.x = 100;
      BALL.y = 100;
      BALL.vx = 0; 
      BALL.vy = 0;
      GAME.level = GAME.level + 1;
    }
    var magRan = Math.random()* 5;
    for (var i = 0; i < magRan; i ++){
      if (magRan == i){
        MAGNETS.push({
          x: Math.random()*550,
          y: Math.random()*250,
        });
      }
    }
    var magSan = Math.random()* 5;
    for (var i = 0; i < magSan; i ++){
      if (magSan == i){
        SANDTRAPS.push({
          x: Math.random()*550,
          y: Math.random()*250,
        });
      }
    }

    renderCourse(context);
    renderBall(context);



  }

  else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);

  }
  window.requestAnimationFrame(runGame);

}

window.requestAnimationFrame(runGame);

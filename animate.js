
function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {
  var a;
  var b;
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
      HOLE.xPos = Math.random()*550;  //x-coord of hole/flag image
      HOLE.yPos = Math.random()*220;
      if (BALL.balls < 3){
        BALL.balls ++;
      }
    }

    for (var i = 0; i < GAME.level; i ++){
      //if (magRan == i){
        MAGNETS.push({
          xm: a,
          ym: b,
        });
      //}
    }
    for (var i = 0; i < GAME.level; i ++){
      //if (magSan == i){
        SANDTRAPS.push({
          xs: a,
          ys: b,
        });
    //  }
    }

    renderCourse(context);
    renderBall(context);
    context.font = "30px Arial";
    context.fillText("Level:"+ GAME.level + " Strokes :" + BALL.strokes + " Balls: " + BALL.balls, 50, 20);


  }

  else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);

  }
  window.requestAnimationFrame(runGame);

}

window.requestAnimationFrame(runGame);

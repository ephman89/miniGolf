function renderBall(context){
  BALL.initialized = true;
  drawBall(context);

}
function drawBall (context){
  context.fillRect(BALL.x,BALL.y,20,20);
}


function animateBallMovement(){
  document.addEventListener('click', printMousePos, true);
  function printMousePos(e) {
    if (e.screenX >= BALL.x  - 50 && e.screenX <= BALL.x + 70 && e.clientY >= BALL.y - 50 && e.clientY <=BALL.y + 70){
      function handler(e) {
          e = e || window.event;

          var pageX = e.pageX;
          var pageY = e.pageY;

          // IE 8
          if (pageX === undefined) {
              pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
              pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
          }

          console.log(pageX, pageY);
          // tells where the ball goes\
          BALL.vx = (BALL.x  - pageX)/10;
          BALL.vy = (BALL.y  - pageY)/10;


      }

      // attach handler to the click event of the document
      if (document.attachEvent) document.attachEvent('onclick', handler);
      else document.addEventListener('click', handler);


    }

}
makeBallGo();
}

function makeBallGo (){
  var amount = .05;
  if (BALL.vx != 0 || BALL.vy != 0){
     if (BALL.vx < .1 && BALL.vx > -.1){
      BALL.vx = 0;
      BALL.vy = 0;

    } else if (BALL.vx > 0){
      BALL.vx -= amount;
    } else {
      BALL.vx += amount;
    }
    if (BALL.vy < .1 && BALL.vy > -.1){
      BALL.vx = 0;
      BALL.vy = 0;
      BALL.strokes ++;
    } else if (BALL.vy > 0){
      BALL.vy -= amount;
    } else {
      BALL.vy += amount;
    }
}
  if (BALL.x + 15 > GAME.canvas.width){
    BALL.vx = -BALL.vx;
  }
  if (BALL.x < 0){
    BALL.vx = -BALL.vx;
  }
  if (BALL.y < 0){
    BALL.vy = -BALL.vy;
  }
  if (BALL.y + 15 > GAME.canvas.height){
    BALL.vy = -BALL.vy;
  }

  BALL.x = BALL.x + BALL.vx;

  BALL.y = BALL.y + BALL.vy;

  for (magnets of MAGNETS){
      if (
          BALL.x >= magnets.xm &&
          BALL.x <= (magnets.xm + 30) &&
          BALL.y >= magnets.ym &&
          BALL.y <= (magnets.ym + 30)){
            BALL.balls --;
      }
    }
    for (trap of SANDTRAPS){
      if (
          BALL.x >= trap.xs &&
          BALL.x <= (trap.xs + 40) &&
          BALL.y >= trap.ys &&
          BALL.y <= (trap.ys + 40)){
            BALL.vx = 0;
            BALL.vy = 0;
      }
    }

    if (BALL.balls < 0){
      GAME.started = false;
    }
}

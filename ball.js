function renderBall(context){
  BALL.initialized = true;
  drawBall(context);
  animateMovement(context);
}
function drawBall (context){
  context.fillRect(BALL.x,BALL.y,20,20);
}


function animateMovement(context){
  document.addEventListener('click', printMousePos, true);
  function printMousePos(e) {
    if (e.screenX >= BALL.x - 60 && e.screenX <= BALL.x + 60 && e.screenY >= BALL.y - 60 && e.screenY <=BALL.y + 60){
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
          // tells where the ball goes
          makeBallGo(pageX,pageY);

      }

      // attach handler to the click event of the document
      if (document.attachEvent) document.attachEvent('onclick', handler);
      else document.addEventListener('click', handler);


    }

}
}

function makeBallGo (x,y){
  var startX = BALL.x;
  var startY = BALL.y;

  BALL.x = x;
  BALL.y = y;

  BALL.vx = (BALL.x - startX)/5;
  BALL.vy = (BALL.y - startY)/5;

  



}

function renderBall(context){
  BALL.initialized = true;
  drawBall(context);
  animateMovement(context);
}
function drawBall (context){
  context.fillRect(BALL.x,BALL.y,20,20);
}


function animateMovement(context){
BALL.onmousedown = function(event){
  let downListener = () => {
    moved = false
  }
  document.addEventListener('mousedown', downListener);
  let moveListener = () => {
    moved = true

  }
  document.addEventListener('mousemove', moveListener)
  let upListener = () => {
    if (moved) {
        console.log('moved')
    } else {
        console.log('not moved')
    }
  }
  document.addEventListener('mouseup', upListener)
}
}

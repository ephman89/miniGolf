

function Start() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  COURSE.initialized = true;
  BALL.image.src = "golfBall.png";
  renderCourse(context);
  renderBall(context);
  // renderHole(context);
}

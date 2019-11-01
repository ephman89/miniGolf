function renderSandtraps(context) {
  //will draw the sandtraps on the screen
  //the sandtraps are objects stored in COURSE.sandtraps[]
}

function renderMagnets(context) {
  //will draw the magnets on the screen
  //the magnets are objects stored in COURSE.magnets[]
}

function renderHole()

function renderCourse(context) {
  if (COURSE.initialized) {
    context.fillStyle = "#00ff00";
    context.fillRect(0, 0, GAME.canvas.width, GAME.canvas.height);
    renderSandtraps(context);
    renderMagnets(context);
  }
}

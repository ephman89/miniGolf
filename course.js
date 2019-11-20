function renderSandtraps(context) {
  //will draw the sandtraps on the screen
  //the sandtraps are objects stored in COURSE.sandtraps[]
  context.fillRect(COURSE.sandtraps[0].w,COURSE.sandtraps[0].h,COURSE.sandtraps[0].x,COURSE.sandtraps[0].y);
  var img = new Image();
  context.drawImage(img,COURSE.sandtraps.w,COURSE.sandtraps.h);
  img.src = 'sandtrap.png';
  COURSE.sandtraps.pop();
}

function renderMagnets(context) {
  //will draw the magnets on the screen
  //the magnets are objects stored in COURSE.magnets[]
  //magents have position of where they should be
  context.fillRect(30,30,COURSE.magnets[0],COURSE.magnets[0]);
  var img = new Image();
  context.drawImage(img,30,30);
  img.src = 'magnet.png';
  COURSE.magnets.pop();
}

function renderHole(context){

  context.fillRect(HOLE.xPos, HOLE.yPos,HOLE.w,HOLE.h);

  var img = new Image();
  img.src = 'flag.png';
  context.drawImage(img,HOLE.xPos, HOLE.yPos,HOLE.w,HOLE.h);
}

function renderCourse(context) {
  if (COURSE.initialized) {
    context.fillStyle = "#00ff00";
    context.fillRect(0, 0, GAME.canvas.width, GAME.canvas.height);
    renderHole(context);
    renderSandtraps(context);
    renderMagnets(context);

  }
}

function renderSandtraps(context) {
  //will draw the sandtraps on the screen
  //the sandtraps are objects stored in COURSE.sandtraps[]
  context.fillRect(COURSE.sandtraps[0].w,COURSE.sandtraps[0].h,COURSE.sandtraps[0].x,COURSE.sandtraps[0].y);
  var img;
  context.drawImage(img,COURSE.sandtraps.w,COURSE.sandtraps.h);
  img.src = 'sandtrap.png';
}

function renderMagnets(context) {
  //will draw the magnets on the screen
  //the magnets are objects stored in COURSE.magnets[]
  context.fillRect(30,30,COURSE.magnets[0].x,COURSE.magnets[0].y);
  var img;
  context.drawImage(img,30,30);
  img.src = 'magnet.png';
}

function renderHole(context){
  context.fillRect(HOLE.w, HOLE.h,HOLE.xPos,HOLE.yPos);
  var img;
  context.drawImage(img,HOLE.w,HOLE.h);
  img.src = 'flag.png';
}

function renderCourse(context) {
  if (COURSE.initialized) {
    context.fillStyle = "#00ff00";
    context.fillRect(0, 0, GAME.canvas.width, GAME.canvas.height);
    renderSandtraps(context);
    renderMagnets(context);
    renderHole(context);
  }
}

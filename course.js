function renderSandtraps(context) {
  //will draw the sandtraps on the screen
  //the sandtraps are objects stored in COURSE.sandtraps[]
  context.fillRect(SANDTRAPS[0].x,SANDTRAPS.y,40,20);
  var img = new Image();
  context.drawImage(img,40,20);
  img.src = 'sandtrap.jpeg';
  SANDTRAPS.pop();
}

function renderMagnets(context) {
  //will draw the magnets on the screen
  //the magnets are objects stored in COURSE.magnets[]
  //magents have position of where they should be
  context.fillRect(MAGNETS[0].x,MAGNETS[0].y,30,30);
  var img = new Image();
  context.drawImage(img,30,30);
  img.src = 'magnet.png';
  MAGNETS.pop();
}

function renderHole(context){


  context.fillRect(HOLE.xPos, HOLE.yPos,HOLE.w,HOLE.h);


  var img = new Image();
  img.src = 'flag.png';
  context.drawImage(img,HOLE.xPos, HOLE.yPos,HOLE.w,HOLE.h);
}

function renderCourse(context) {
  if (COURSE.initialized) {

    renderHole(context);
    renderSandtraps(context);
    renderMagnets(context);

  }
}

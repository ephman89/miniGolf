var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};



var HOLE = {
  xPos : Math.random()*550,  //x-coord of hole/flag image
  yPos : Math.random()*220,  //y coord of hole/flag image
  w : 30,
  h : 90
};

var COURSE = {
  initialized : false,
  hole : {
    image : new Image(),
  },
  sandtraps : {
    image : new Image(),
  },
  magnets : []
};

var MAGNETS = [{
  xm: 0,
  ym: 0
}];
var SANDTRAPS = [{
  xs: 0,
  ys: 0
}];
for (var i = 0; i < GAME.level; i ++){
  //if (magRan == i){
    MAGNETS.push({
      xm: 0,
      ym: 0,
    });
  //}
}
for (var i = 0; i < GAME.level; i ++){
  //if (magSan == i){
    SANDTRAPS.push({
      xs: 0,
      ys: 0,
    });
//  }
}

var BALL = {
  initialized : false,
  image : new Image(),
  x : 300,  //x-coord
  y : 150,  //y-coord
  d : 15, //diameter
  vx: 0,  //horizontal speed
  vy: 0,
  strokes: 0,
  balls: 3  //vertical speed
};

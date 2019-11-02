var GAME = {
  canvas : {
    width : 900,
    height : 900
  },
  started : true,
  level : 1
};

var HOLE = {
  xPos : 100,  //x-coord of hole/flag image
  yPos : 100,  //y coord of hole/flag image
  w : (342/2),
  h : (638/2)
};

var COURSE = {
  initialized : false,
  hole : {
    image : new Image(),
  },
  sandtraps : [],
  magnets : []
};


var BALL = {
  initialized : false,
  image : new Image(),
  x : 0,  //x-coord
  y : 0,  //y-coord
  d : 15, //diameter
  vx: 0,  //horizontal speed
  vy: 0   //vertical speed
};

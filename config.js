var GAME = {
  canvas : {
    width : 900,
    height : 900
  },
  started : true,
  level : 1
};

var HOLE = {
  xPos : 0,  //x-coord of hole/flag image
  yPos : 0,  //y coord of hole/flag image
  w : 10,
  h : 30
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
  x : 300,  //x-coord
  y : 150,  //y-coord
  d : 15, //diameter
  vx: 0,  //horizontal speed
  vy: 0   //vertical speed
};

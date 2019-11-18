var GAME = {
  canvas : {
    width : 900,
    height : 900
  },
  started : true,
  level : 1
};



var HOLE = {
  xPos : 50,  //x-coord of hole/flag image
  yPos : 50,  //y coord of hole/flag image
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


var BALL = {
  initialized : false,
  image : new Image(),
  x : 300,  //x-coord
  y : 150,  //y-coord
  d : 15, //diameter
  vx: 0,  //horizontal speed
  vy: 0   //vertical speed
};

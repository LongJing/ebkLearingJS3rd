// console.log('main.js loaded');
$(document).ready( function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  // TODO
  /* first way
  var c = Shape.Circle(200, 200, 70);
  c.fillColor = 'green';
  var sq = Shape.Circle(215, 215, 60);
  sq.fillColor = 'red';
  */

  var c;
  for(var x=25; x<400; x+=50) {
    for(var y=25; y<400; y+=50) {
      c = Shape.Circle(x,y,20);
      if( x === 50 ) {
        c.fillColor = 'red';
        console.log("red x =" + x);
      } else {
        c.fillColor = 'green';
        console.log("green x =" + x);
      }

    }
  }

  paper.view.draw();
  console.log('main.js loaded from jQuery');
})

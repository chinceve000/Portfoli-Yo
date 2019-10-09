
function setup(){
  createCanvas(500, 500);

}

function draw(){
  background("#ccd");
  fill("#fff")
  // big eye circle
  stroke("#000")
  strokeWeight(1);
  ellipse(150, 100, 60, 75);
  ellipse(300, 100, 60, 75);
  // medium eye circle
  strokeWeight(10);
  ellipse(150, 100, 10, 20);
  ellipse(300, 100, 10, 20);
  // small glare eye circle
  strokeWeight(1);
  fill("#fff");
  ellipse(145, 90, 8, 8);
  ellipse(295, 90, 8, 8);
  // eyebrows
  strokeWeight(5);
  line(110, 60, 170, 45)
  line(270, 50, 330, 60)
  // mouth
  stroke("#FFB6C1");
  fill("#FFB6C1");
  arc(225, 200, 180, 180, 0, radians(180));
  // in the arc first two values are x and y for center point
  fill("#fff")
  arc(225, 212, 150, 150, 0, radians(180));

}

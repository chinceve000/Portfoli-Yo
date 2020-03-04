var currentMouse

function setup(){
createCanvas(1000, 1000);
textFont('Verdana');
textSize(30);
text('draw here:', 160, 50);
fill("#EA2961")
textSize(15);
text('stamp a radish', 0, 100);
text('carve the radish', 0, 175);
text('stamp a leaf', 5, 265);
fill("#364E9B");
rect(0, 275, 140, 687);
fill("#fff");
textSize(30);
text('night', 15, 400);
text('of', 35, 450);
text('the', 45, 500);
text('radishes', 5, 550);

noStroke();
fill("#EA2961");
beginShape();
vertex(5, 600);
vertex(15, 580);
vertex(25, 600);
vertex(15, 625);
endShape(CLOSE);

fill("#fff");
beginShape();
vertex(8, 600);
vertex(15, 590);
vertex(22, 600);
vertex(15, 605);
endShape(CLOSE);

textSize(15)
text('oaxaca,', 35, 600);
text('mexico', 40, 620);

}

function draw(){

  stroke("#000")
  noFill()
  strokeWeight(5);
  rect(140, 5, 855, 955)

  noStroke();
  fill("#EA2961")
  circle(50, 50, 50);
  if(mouseIsPressed==true && mouseX>=0 && mouseY>=0 && mouseX<=140 && mouseY<=115){
    currentMouse='radish'
  }

  stroke("#000");
  fill("#fff");
  circle(50, 135, 25);
  noStroke();
  fill("#EA2961");
  if(mouseIsPressed==true && mouseX>=0 && mouseY>=115 && mouseX<=140 && mouseY<=190){
    currentMouse='carve'
  }

  noStroke();
  fill("#8BCE5D");
  ellipse(50, 215, 25, 50);
  if(mouseIsPressed==true && mouseX>=0 && mouseY>=190 && mouseX<=140 && mouseY<=400){
    currentMouse='leaf'
  }

if(mouseIsPressed==true && mouseX>=140 && mouseY>=75 && mouseX<=980 && mouseY<=950){
  if(currentMouse=='radish'){
    fill("#EA2961");
    circle(mouseX, mouseY, 50);
  }
  if(currentMouse=='carve'){
    noStroke();
    fill("#fff");
    circle(mouseX, mouseY, 25);
  }
  if(currentMouse=='leaf'){
    fill("#8BCE5D");
    ellipse(mouseX, mouseY, 25, 50);
  }
}




}

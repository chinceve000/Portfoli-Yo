function setup(){
  createCanvas(500, 500);

  noStroke()
  fill("#ff5733");
  rect(0, 0, 50, 50);
  fill("#3FF01C");
  rect(0, 50, 50, 50);
  fill("#1C9FF0");
  rect(0, 100, 50, 50);
  fill("#A267F7");
  rect(0, 150, 50, 50);
  fill("#000")
  rect(450, 0, 50, 25);
  rect(450, 50, 50, 35);
  rect(450, 100, 50, 50);
  strokeWeight(5);
}

function draw(){
  if(mouseIsPressed==true && mouseX>=50){
      point(mouseX-5, mouseY-5);
  }else if (mouseIsPressed==true && mouseX<=51 && mouseY<=50){
    stroke("#ff5733");
  }else if (mouseIsPressed==true && mouseX<=51 && mouseY>=51 && mouseY<=100){
    stroke("#3FF01C")
  }else if (mouseIsPressed==true && mouseX<=51 && mouseY>=101 && mouseY<=150){
    stroke("#1C9FF0")
  }else if (mouseIsPressed==true && mouseX<=51 && mouseY>=151 && mouseY<=200){
    stroke("#A267F7")
  }

  if (mouseIsPressed==true && mouseX<=450){
    point(mouseX-5,mouseY-5);
  }else if (mouseIsPressed==true && mouseX>=450 && mouseY<=25){
    strokeWeight(2);
  }else if (mouseIsPressed==true && mouseX>=450 && mouseY<=85 && mouseY>=50){
    strokeWeight(5);
  }else if (mouseIsPressed==true && mouseX>=450 && mouseY<=150 && mouseY>=100){
    strokeWeight(8);
  }





}

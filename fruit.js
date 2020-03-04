
var fruit
fruit='melon'
var status

eatenX = []
eatenY = []

function setup(){
  createCanvas(1000, 1000);
}

function draw(){

  background('#fff');

  textFont('Verdana');
  fill('#F4AC60');
  textSize(30);
  text('eat fruit!', 425, 40);
  fill('#C9E785');
  rect(0, 70, 1000, 15);

  if(fruit=='melon'){
    noStroke();
    fill('#C9E785');
    circle(500, 500, 600);
    fill('#F4AC60');
    circle(500, 500, 500);
    fill('#C1752A');
    ellipse(500, 450, 10, 30);
    ellipse(500, 550, 10, 30);
    ellipse(450, 500, 30, 10);
    ellipse(550, 500, 30, 10);

    fill('#9E9C9A');
    circle(30, 150, 20);
    rect(25, 150, 10, 40);
    textSize(20);
    text('spoon', 0, 130);

    if(mouseIsPressed==true && mouseX>=0 && mouseY>=100 && mouseX<=200 && mouseY<=200){
      status='eat'
    }

    if(status=='eat' && mouseIsPressed==true){
      eatenX.push(mouseX);
      eatenY.push(mouseY);
    }

    for (index=0; index<eatenX.length;++index){
      fill('#fff');
      circle(eatenX[index], eatenY[index], 30);
      circle(eatenX[index]+10, eatenY[index], 30);
      circle(eatenX[index]+22, eatenY[index]+5, 20);
      circle(eatenX[index]-12, eatenY[index]+5, 20);
    }

  }

}

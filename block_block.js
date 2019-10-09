function setup(){
  createCanvas(500, 500);
  frameRate(5);
}

function draw(){
  stroke("#fff0");


for (var countRows = 0; countRows < 10; countRows++){
  for (var countBlocks = 0; countBlocks < 6; countBlocks++){
    fill(mouseX, mouseY, mouseX);
    rect(countBlocks*100,countRows*50,100,25);

    fill(mouseY, mouseX, mouseY);
    rect(240,0+countRows*100,20,100);
    rect(115,0+countRows*100,20,100);
    rect(365,0+countRows*100,20,100);

  }
}

}

var mic;
var mySvg;

function preload(){
  mySvg = loadImage("img/mindMaps-01.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();
}



function draw() {

  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  var x = random(-1000, 1000);
  var y = random(-500, 1500)



  var vol = mic.getLevel();
  // background(200, 200, 200);
   fill(r,g,b);
  ellipse(windowWidth/2, windowHeight/2, vol*1000, vol*1000);

  // imageMode(windowWidth/2, windowHeight/2);
  image(mySvg, 10, 10);



  console.log(vol);
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}



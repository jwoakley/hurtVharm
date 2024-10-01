var mic;
var mmOne;

function preload(){
  mmOne = loadImage("img/mindMaps-01.png");
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
 


  var ww = (windowWidth/2);
  var wh = (windowHeight/2);
 
  var vol = mic.getLevel();
  var x = cos(vol * 1000.1) - g;
  var y = x * sin(x * .1) + r;

  frameRate(5);


  background(200, 200, 200);
  //  fill(r,g,b);
  // ellipse(windowWidth/2, windowHeight/2, vol*1000, vol*1000);

  imageMode(CENTER); //IMAGE MODE CENTER MEASURES FROM CENTER POINT OF IMAGE, must use width/2 height/2 with center
  image(mmOne, ww, wh, x, y);



  console.log(mmOne);
 
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



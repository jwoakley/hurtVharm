var mic;
var amp;

var scale = 10.0;

var mmOne;

function preload(){
  mmOne = loadImage("img/mindMaps-01.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(125,0,100);

  mic = new p5.AudioIn();
  mic.start();

  amp = new p5.Amplitude();
  amp.setInput(mic);

	//  speed = random(.1, .9);
	//  x = random(-2, 2);
	//  y = random(-2, 2);
  //      time1 = 2000;
  //      picture = 1360;
  //      easing = random(-.001, 1.1);

// imageMode(CENTER);
//  image(mmOne, windowWidth/2, windowHeight/2);

}

function draw() {

  // noStroke();
  // fill(0,10);
  // rect(0,0,width,height);

  scale = map(amp.getLevel(), 0, 1.0, 10, width);

  // fill(255);
 

  // fill(255);
  // ellipse(width/2, height/2, scale, scale);
   image(mmOne, windowWidth/2, windowHeight/2, scale, scale);

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



var backGround, bImg, policeImg, thiefImg;
var police, thief;

function preload() {
  bImg = loadImage("track.png");
  policeImg = loadImage("police image.png");
  thiefImg = loadImage("thief image.png");
}

function setup() {
  createCanvas(windowWidth -20,windowHeight- 30);

  // backGround = createSprite(0,0,windowWidth -20,windowHeight- 30)
  // backGround.addImage(bImg);
  // backGround.scale = 2.5;

  thief = createSprite(400, 200, 50, 50);
  thief.addImage(thiefImg);

  police = createSprite(600,200,50,50);
  police.addImage(policeImg);
}

function draw() {
  background("white");
  
  image(bImg,0,-displayHeight*4,displayWidth,displayHeight*4)
  drawSprites();
}
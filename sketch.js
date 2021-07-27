var sea,seaimg
var ship,shipimg

function preload(){
shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400)
  sea.addImage("bg",seaimg)
  sea.scale=0.4
  sea.x = sea.width/8
  sea.velocityX=-10
  
  ship = createSprite(120,250,10,10)
  ship.addAnimation("running",shipimg)
  ship.scale=0.3
  
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x = sea.width/8;
  }
 drawSprites();
}
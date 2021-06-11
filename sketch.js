var shipimg,ship
var seaImg,sea
function preload(){
seaImg = loadImage("sea.png")
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(300,200,30,20)
  sea.addImage("sea",seaImg)
 
   


  ship  = createSprite(80,350,10,10)
  ship.addAnimation("ship",shipImg)
 ship.scale = 0.1

}

function draw() {
 background("180")
 sea.velocityX  = -4
  
  if (sea.x < 0){
    sea.x = sea.width/2;
  }
  










 drawSprites()
}
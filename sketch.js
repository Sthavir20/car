var car,wall,speed,weight

function setup() {
  createCanvas(1600,400);
  car=createSprite(400, 200, 50, 50);
  car.shapeColor="white"
  wall=createSprite(1500,200,60,100)
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed
}

function draw() {
  background(0); 
  
  if(wall.x-car.x<car.width/2+wall.width/2){
car.velocityX=0
var def=0.5*weight*speed*speed/22500
if(def>180){
  car.shapeColor="red"
}
if(def<180&&def>100){
  car.shapeColor="yellow"
}
if(def<100){
  car.shapeColor="green"
}
  }
  drawSprites();
}
var astronaut;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var bg,spaceship;


function preload(){
  
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move1.png");

}


function setup() {
  createCanvas(400, 400);

  spaceship = createSprite(200,200);
  spaceship.addImage("background",bg);
  
  astronaut = createSprite(200,200);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
  
  textSize(10);
  fill(255);
  textSize("Instructions:",20,10);
  textSize(10);
  fill(255);
  textSize("UP arrow = Brushing",30,30);
  textSize(10);
  fill(255);
  textSize("Down arrow = Gymming",30,50);
  textSize(10);
  fill(255);
  textSize("Left arrow = Eating",30,70);
  textSize(10);
  fill(255);
  textSize("Right arrow = Drinking",30,90);
  textSize(10);
  fill(255);
  textSize("m key = Moving",30,110);
}

function draw() {
  background(220);

 if(keyDown("UP_ARROW")){
 astronaut.addAnimation("brushing",brush);
 astronaut.changeAnimation("brushing");
 astronaut.y=350;
 astronaut.velocityX=0;
 astronaut.velocityY=0;
 }

 if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("drinking",drink);
  astronaut.changeAnimation("drinking");
  astronaut.x=50;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }

 if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("Gymming",gym);
  astronaut.changeAnimation("gym");
  astronaut.y=50;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("Eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }

  if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y=200;
  astronaut.velocityX=2;
  astronaut.velocityY=3;
  }  
  
  createEdgeSprites();
  
  astronaut.bounceOff(edges);

  drawSprites();
}
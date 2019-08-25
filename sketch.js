var fixed;
var moving;
var obstacle1;
var obstacle2;
var object;
function setup() {
  createCanvas(800,400);
  fixed = createSprite(100, 200, 50, 50);
  moving = createSprite(200,200,50,50);
  obstacle1 = createSprite(300,200,50,50);
  obstacle2 = createSprite(400,200,50,50);
  object = createSprite(500,200,50,50);
 // moving.velocityY = 5;
 // fixed.velocityY = -5;
  
}

function draw() {
  background("orange");  
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  if (bounceOff(moving,obstacle1)){
    moving.shapeColor = "blue";
    obstacle1.shapeColor = "brown";
    moving.velocityX = -5;
    obstacle1.velocityX = -5;
  }
  if (bounceOff(moving,obstacle2)){
    obstacle2.shapeColor = "red";
moving.shapeColor = "yellow";
moving.velocityX = -5;
    obstacle2.velocityX = -5;

  }
  if (bounceOff(moving,object)){
    object.shapeColor = "violet";
moving.shapeColor = "pink";
moving.velocityX = -5;
    object.velocityX = -5;
  }
  if (bounceOff(moving,fixed)){
    fixed.shapeColor = "black";
moving.shapeColor = "green";
moving.velocityX = -5;
    fixed.velocityX = -5;
  }
  //else{
    //fixed.shapeColor = "green";
    //moving.shapeColor = "green";
  //}
  drawSprites();
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    ){
return true;
//moving.velocityY = moving.velocityY*(-1);
//fixed.velocityY = fixed.velocityY*(-1);

  }
  else{
    return false;
  }
  }

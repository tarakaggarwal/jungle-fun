var fixed;
var moving;
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 350, 50, 50);
  moving = createSprite(400,50,50,50);
  moving.velocityY = 5;
  fixed.velocityY = -5;
  
}

function draw() {
  background(255,255,255);  
  
  
  if (moving.x - fixed.x < moving.width/2 + fixed.width/2
    && fixed.x - moving.x < fixed.width/2 + moving.width/2
    && moving.y - fixed.y < moving.height/2 + fixed.height/2
    && fixed.y - moving.y < moving.height/2 + fixed.height/2){
fixed.shapeColor = "red";
moving.shapeColor = "yellow";
moving.velocityY = moving.velocityY*(-1);
fixed.velocityY = fixed.velocityY*(-1);

  }
  else{
    fixed.shapeColor = "green";
moving.shapeColor = "green";
  }

  drawSprites();
  
}
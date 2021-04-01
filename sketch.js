var movingRect,fixRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixRect=createSprite(100, 600, 50, 80);
  fixRect.shapeColor='green';
  movingRect=createSprite(200,200,80,30);
  movingRect.shapeColor='green';
  gameObject1= createSprite(100,100,50,50);
  gameObject1.shapeColor ='green';
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor ="green";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor ="green";
  gameObject4 = createSprite(1100,600,50,50);
  gameObject4.shapeColor="green";

  fixRect.velocityX = 5;
  gameObject4.velocityX = -5;
}

function draw() {
  background('black'); 
  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;
  

  // if(isTouching(movingRect, gameObject4)){
  //   movingRect.shapeColor = "red";
  //   gameObject4.shapeColor = "red";
  // }
  // else{
  //   movingRect.shapeColor = "green";
  //   gameObject4.shapeColor = "green";
  //}
  bounceOff(gameObject4,fixRect)
  
  drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}


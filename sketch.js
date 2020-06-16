function setup() {
  createCanvas(800,400);
 sun= createSprite(300, 100, 50, 50);
 planet1= createSprite(10,10,50,50);
 sun.shapeColor="yellow";
 planet1.setVelocity(2,1);
}

function draw() {
  background(0);
 // translate(150,150);
  rotate(radians(frameCount))
  if (sun.isTouching(planet1)){
    planet1.destroy();

  }
  if (World.frameCount%50===0){
    sun.width++;
    sun.height++;
  }
  drawSprites();
}
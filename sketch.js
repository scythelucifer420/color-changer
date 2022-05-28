
function setup() {
  createCanvas(400,400);
  createSprite(200,200,200,200)
}

function draw() 
{
  background("blue")
  if(keyDown("space")){
background("red")
  }
drawSprites()
}





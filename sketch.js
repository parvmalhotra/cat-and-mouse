
function preload() {
    bg=loadImage("images/garden.png");
    cat1=loadAnimation("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadAnimation("images/cat4.png");

    mouse1=loadAnimation("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(800,600)
cat.addAnimation("sleeping",cat1);
cat.scale=0.2;
mouse=createSprite(300,600)
mouse.addAnimation("sleepingM",mouse1)
mouse.scale=0.15;
}
function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<cat.width/2+mouse.width/2)
{cat.velocityX=0
    cat.addAnimation("stop",cat3)
    cat.x=400;
    cat.scale=0.2;
cat.changeAnimation("stop")

mouse.addAnimation("stopM",mouse3)
mouse.scale=0.2;
mouse.changeAnimation("stopM")

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW)
{cat.velocityX=-3
cat.addAnimation("running",cat2)
cat.changeAnimation("running")

}

}

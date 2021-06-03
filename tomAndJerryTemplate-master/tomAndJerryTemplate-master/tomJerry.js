var cat,mouse,cat_animation,mouse_animation,path,path_animation,cat_animation2,cat_animation3
function preload() {
path_animation=loadImage("images/garden.png")
cat_animation=loadAnimation("images/cat1.png")
cat_animation2=loadAnimation("images/cat2.png","images/cat3.png")
cat_animation3=loadAnimation("images/cat4.png ")
mouse_animation=loadAnimation("images/mouse1.png")
mouse_animation2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouse_animation3=loadAnimation("images/mouse4.png ")
}

function setup(){
    createCanvas(1000,800);
    path=createSprite(500,400)
  path.addImage("pathImg",path_animation)

  cat=createSprite(700,700)
  cat.addAnimation("catImg",cat_animation)
  cat.scale=0.1
  mouse=createSprite(200,700)
    mouse.addAnimation("mouseImg",mouse_animation)
  mouse.scale=0.1    
    //create tom and jerry sprites here

}

function draw() {

    background(255);
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
cat.velocityX=0
cat.addAnimation("catImg3",cat_animation3)
cat.changeAnimation("catImg3")
mouse.addAnimation("mouseImg3",mouse_animation3)
mouse.changeAnimation("mouseImg3")
mouse.x=185
}
    keyPressed()
    drawSprites();
}
function keyPressed(){
  if(keyCode=== LEFT_ARROW){
   cat.addAnimation("catImg2",cat_animation2)
   cat.changeAnimation("catImg2")
   mouse.addAnimation("mouseImg2",mouse_animation2)
   mouse.changeAnimation("mouseImg2")
 mouse.frameDelay=25
   cat.velocityX=-2

  }
}




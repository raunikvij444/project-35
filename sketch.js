var iss,spacecraft
var hasDocked=false;

function preload() {
   bg=loadImage("spacebg.jpg")
   issImage=loadImage("iss.png")
   sc=loadImage("spacecraft1.png")
   sc1=loadImage("spacecraft2.png")
   sc2=loadImage("spacecraft3.png")
   sc3=loadImage("spacecraft4.png")
}


function setup() {
  createCanvas(1300,600);
  iss=createSprite(650,300);
  iss.addImage(issImage)
  spacecraft=createSprite(650,580)
  spacecraft.addImage(sc)
  spacecraft.scale=0.25

  
}



function draw() {
  background(bg); 
  
  if(!hasDocked){


  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(sc2)
    spacecraft.x=spacecraft.x-1
  }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(sc3)
      spacecraft.x=spacecraft.x+1
    }
      if(keyDown("UP_ARROW")){
        spacecraft.addImage(sc1)
        spacecraft.y=spacecraft.y-1
    }
    if(keyDown("DOWN_ARROW")){
      // spacecraft.addImage(sc1)
       spacecraft.y=spacecraft.y+1
       
    }
    
  }
  if(spacecraft.y<=iss.y+90&&spacecraft.x<=iss.x-10){
    hasDocked=true
    textSize(25)
    text("docking succesfull",200,300)
  }
  drawSprites();
}
var astronaut,platform,platform_breakable,aliens;
var astronautImg,platform_breakIMG,aliensIMG,platform_image;
var backGround;
var backgroundImg;
//var platform2,platform3,platform4,platform5,platform6,platform7,platform8,platform9,platform10,platform11;
var LplatformGroup,RplatformGroup;
var Lplatform,Lplatform2,Lplatform3;
var Lplatform4,Lplatform5,Lplatform6;
var Lplatform7,Lplatform8,Lplatform9;
var Lplatform10,Lplatform11,Lplatform12;
var Lplatform13,Lplatform14;

var Rplatform,Rplatform2,Rplatform3;
var Rplatform4,Rplatform5,Rplatform6;
var Rplatform7,Rplatform8,Rplatform9;
var Rplatform10,Rplatform11,Rplatform12;
var Rplatform13;

var Aplatform,Aplatform2,Aplatform3;
var Aplatform4,Aplatform5,Aplatform6;
var Aplatform7,Aplatform8,Aplatform9;
var Aplatform10,Aplatform11,Aplatform12;
var Aplatform13;

var Bplatform,  Bplatform2, Bplatform3;
var Bplatform4, Bplatform5, Bplatform6;
var Bplatform7, Bplatform8, Bplatform9;
var Bplatform10,Bplatform11,Bplatform12;
var Bplatform13,Bplatform14;

var Cplatform,  Cplatform2, Cplatform3;
var Cplatform4, Cplatform5, Cplatform6;
var Cplatform7, Cplatform8, Cplatform9;
var Cplatform10,Cplatform11,Cplatform12;
var Cplatform13;

var Kplatform,  Kplatform2, Kplatform3;
var Kplatform4, Kplatform5, Kplatform6;
var Kplatform7, Kplatform8, Kplatform9;
var Kplatform10,Kplatform11,Kplatform12;
var Kplatform13,Kplatform14;

var Xplatform,  Xplatform2, Xplatform3;
var Xplatform4, Xplatform5, Xplatform6;
var Xplatform7, Xplatform8, Xplatform9;
var Xplatform10,Xplatform11,Xplatform12;
var Xplatform13,Xplatform14;

var x,y;

var GameState,play,end;

function preload(){

astronautImg=loadImage("IMAGES/ASTRONAUT.png")
backgroundImg=loadImage("IMAGES/Untitled.png")
platformImg=loadImage("IMAGES/platform (2).png")
SpikePlatformImg=loadImage("IMAGES/SpikesPlatform.png")
astronaut_falling=loadImage("IMAGES/Astronaut .png")

//jumpSound=loadSound("SOUNDS/RETRO Jump Up Bounce Long 03.wav")
//moveSound=loadSound("SOUNDS/movesound.ogg")

}

//platform2=createSprite(200,i);
//;platformGorup.add(platform2);



function setup() {
  createCanvas(displayWidth,displayHeight);

  backGround=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  backGround.addImage(backgroundImg);
  backGround.scale=10

  LplatformGroup=new Group();
  RplatformGroup=new Group();

  x=+50;
  y=-100;

  astronaut=createSprite(240, 4250, 20, 50);  astronaut.addImage(astronautImg);
  astronaut.scale=0.25
  //astronaut.debug = true

  platform=createSprite(200,4500,displayWidth,20)
  
  GameState= play










    Lplatform=createSprite(x,y+4500,20,5)
    Lplatform.addImage(platformImg);
    Lplatform.debug=true
    Lplatform.setCollider("rectangle",0,-140,270,58)    
    Lplatform2=createSprite(x,y+3900,20,5)
    Lplatform2.addImage(platformImg);
    Lplatform2.debug=true
    Lplatform2.setCollider("rectangle",0,-140,270,58)
    Lplatform3=createSprite(x,y+3300,20,5)
    Lplatform3.addImage(SpikePlatformImg);
    Lplatform3.debug=true
    Lplatform3.setCollider("rectangle",0,-140,270,58)
    Lplatform4=createSprite(x,y+2600,20,5)
    Lplatform4.addImage(platformImg);
    Lplatform4.debug=true
    Lplatform4.setCollider("rectangle",0,-140,270,58)
    Lplatform5=createSprite(x,y+2000,20,5)
    Lplatform5.addImage(SpikePlatformImg);
    Lplatform5.debug=true
    Lplatform5.setCollider("rectangle",0,-140,270,58)
    Lplatform6=createSprite(x,y+1400,20,5)
    Lplatform6.addImage(platformImg);
    Lplatform6.debug=true
    Lplatform6.setCollider("rectangle",0,-140,270,58)
    Lplatform7=createSprite(x,y+800,20,5)
    Lplatform7.addImage(platformImg);
    Lplatform7.debug=true
    Lplatform7.setCollider("rectangle",0,-140,270,58)    
    Lplatform8=createSprite(x,y+200,20,5)
    Lplatform8.addImage(platformImg);
    Lplatform8.debug=true
    Lplatform8.setCollider("rectangle",0,-140,270,58)
    Lplatform9=createSprite(x,y-400,20,5)
    Lplatform9.addImage(SpikePlatformImg);
    Lplatform9.debug=true
    Lplatform9.setCollider("rectangle",0,-140,270,58)
    Lplatform10=createSprite(x,y-1000,20,5)
    Lplatform10.addImage(platformImg);
    Lplatform10.debug=true
    Lplatform10.setCollider("rectangle",0,-140,270,58)
    Lplatform11=createSprite(x,y-1600,20,5)
    Lplatform11.addImage(platformImg);
    Lplatform11.debug=true
    Lplatform11.setCollider("rectangle",0,-140,270,58)
    Lplatform12=createSprite(x,y-2200,20,5)
    Lplatform12.addImage(SpikePlatformImg);
    Lplatform12.debug=true
    Lplatform12.setCollider("rectangle",0,-140,270,58)
    Lplatform13=createSprite(x,y-2800,20,5)
    Lplatform13.addImage(platformImg);
    Lplatform13.debug=true
    Lplatform13.setCollider("rectangle",0,-140,270,58)
    Lplatform14=createSprite(x,y-3400,20,5)
    Lplatform14.addImage(platformImg);
    Lplatform14.debug=true
    Lplatform14.setCollider("rectangle",0,-140,270,58)








    
    Rplatform=createSprite(x+200,y+4200,20,5)
    Rplatform.addImage(platformImg);
    Rplatform.debug=true
    Rplatform.setCollider("rectangle",0,-140,270,58)    
    Rplatform2=createSprite(x+200,y+3600,20,5)
    Rplatform2.addImage(SpikePlatformImg);
    Rplatform2.debug=true
    Rplatform2.setCollider("rectangle",0,-140,270,58)
    Rplatform3=createSprite(x+200,y+3000,20,5)
    Rplatform3.addImage(platformImg);
    Rplatform3.debug=true
    Rplatform3.setCollider("rectangle",0,-140,270,58)
    Rplatform4=createSprite(x+200,y+2300,20,5)
    Rplatform4.addImage(platformImg);
    Rplatform4.debug=true
    Rplatform4.setCollider("rectangle",0,-140,270,58)
    Rplatform5=createSprite(x+200,y+1700,20,5)
    Rplatform5.addImage(platformImg);
    Rplatform5.debug=true
    Rplatform5.setCollider("rectangle",0,-140,270,58)
    Rplatform6=createSprite(x+200,y+1100,20,5)
    Rplatform6.addImage(SpikePlatformImg);
    Rplatform6.debug=true
    Rplatform6.setCollider("rectangle",0,-140,270,58)
    Rplatform7=createSprite(x+200,y+500,20,5)
    Rplatform7.addImage(platformImg);
    Rplatform7.debug=true
    Rplatform7.setCollider("rectangle",0,-140,270,58)    
    Rplatform8=createSprite(x+200,y-100,20,5)
    Rplatform8.addImage(platformImg);
    Rplatform8.debug=true
    Rplatform8.setCollider("rectangle",0,-140,270,58)
    Rplatform9=createSprite(x+200,y-700,20,5)
    Rplatform9.addImage(SpikePlatformImg);
    Rplatform9.debug=true
    Rplatform9.setCollider("rectangle",0,-140,270,58)
    Rplatform10=createSprite(x+200,y-1300,20,5)
    Rplatform10.addImage(platformImg);
    Rplatform10.debug=true
    Rplatform10.setCollider("rectangle",0,-140,270,58)
    Rplatform11=createSprite(x+200,y-1900,20,5)
    Rplatform11.addImage(SpikePlatformImg);
    Rplatform11.debug=true
    Rplatform11.setCollider("rectangle",0,-140,270,58)
    Rplatform12=createSprite(x+200,y-2500,20,5)
    Rplatform12.addImage(platformImg);
    Rplatform12.debug=true
    Rplatform12.setCollider("rectangle",0,-140,270,58)
    Rplatform13=createSprite(x+200,y-3100,20,5)
    Rplatform13.addImage(platformImg);
    Rplatform13.debug=true
    Rplatform13.setCollider("rectangle",0,-140,270,58)  








    Aplatform=createSprite(x-200,y+4200,20,5)
    Aplatform.addImage(SpikePlatformImg);
    Aplatform.debug=true
    Aplatform.setCollider("rectangle",0,-140,270,58)
    Aplatform2=createSprite(x-200,y+3600,20,5)
    Aplatform2.addImage(platformImg);
    Aplatform2.debug=true
    Aplatform2.setCollider("rectangle",0,-140,270,58)
    Aplatform3=createSprite(x-200,y+3000,20,5)
    Aplatform3.addImage(platformImg);
    Aplatform3.debug=true
    Aplatform3.setCollider("rectangle",0,-140,270,58)
    Aplatform4=createSprite(x-200,y+2300,20,5)
    Aplatform4.addImage(SpikePlatformImg);
    Aplatform4.debug=true
    Aplatform4.setCollider("rectangle",0,-140,270,58)
    Aplatform5=createSprite(x-200,y+1700,20,5)
    Aplatform5.addImage(platformImg);
    Aplatform5.debug=true
    Aplatform5.setCollider("rectangle",0,-140,270,58)
    Aplatform6=createSprite(x-200,y+1100,20,5)
    Aplatform6.addImage(SpikePlatformImg);
    Aplatform6.debug=true
    Aplatform6.setCollider("rectangle",0,-140,270,58)
    Aplatform7=createSprite(x-200,y+500,20,5)
    Aplatform7.addImage(platformImg);
    Aplatform7.debug=true
    Aplatform7.setCollider("rectangle",0,-140,270,58)    
    Aplatform8=createSprite(x-200,y-100,20,5)
    Aplatform8.addImage(platformImg);
    Aplatform8.debug=true
    Aplatform8.setCollider("rectangle",0,-140,270,58)
    Aplatform9=createSprite(x-200,y-700,20,5)
    Aplatform9.addImage(SpikePlatformImg);
    Aplatform9.debug=true
    Aplatform9.setCollider("rectangle",0,-140,270,58)
    Aplatform10=createSprite(x-200,y-1300,20,5)
    Aplatform10.addImage(SpikePlatformImg);
    Aplatform10.debug=true
    Aplatform10.setCollider("rectangle",0,-140,270,58)
    Aplatform11=createSprite(x-200,y-1900,20,5)
    Aplatform11.addImage(platformImg);
    Aplatform11.debug=true
    Aplatform11.setCollider("rectangle",0,-140,270,58)
    Aplatform12=createSprite(x-200,y-2500,20,5)
    Aplatform12.addImage(platformImg);
    Aplatform12.debug=true
    Aplatform12.setCollider("rectangle",0,-140,270,58)
    Aplatform13=createSprite(x-200,y-3100,20,5)
    Aplatform13.addImage(SpikePlatformImg)
    Aplatform13.debug=true
    Aplatform13.setCollider("rectangle",0,-140,270,58)






    Cplatform=createSprite(x+600,y+4200,20,5)
    Cplatform.addImage(SpikePlatformImg);
    Cplatform.debug=true
    Cplatform.setCollider("rectangle",0,-140,270,58)
    Cplatform2=createSprite(x+600,y+3600,20,5)
    Cplatform2.addImage(platformImg);
    Cplatform2.debug=true
    Cplatform2.setCollider("rectangle",0,-140,270,58)
    Cplatform3=createSprite(x+600,y+3000,20,5)
    Cplatform3.addImage(platformImg);
    Cplatform3.debug=true
    Cplatform3.setCollider("rectangle",0,-140,270,58)
    Cplatform4=createSprite(x+600,y+2300,20,5)
    Cplatform4.addImage(SpikePlatformImg);
    Cplatform4.debug=true
    Cplatform4.setCollider("rectangle",0,-140,270,58)
    Cplatform5=createSprite(x+600,y+1700,20,5)
    Cplatform5.addImage(SpikePlatformImg);
    Cplatform5.debug=true
    Cplatform5.setCollider("rectangle",0,-140,270,58)
    Cplatform6=createSprite(x+600,y+1100,20,5)
    Cplatform6.addImage(platformImg);
    Cplatform6.debug=true
    Cplatform6.setCollider("rectangle",0,-140,270,58)
    Cplatform7=createSprite(x+600,y+500,20,5)
    Cplatform7.addImage(SpikePlatformImg);
    Cplatform7.debug=true
    Cplatform7.setCollider("rectangle",0,-140,270,58)    
    Cplatform8=createSprite(x+600,y-100,20,5)
    Cplatform8.addImage(platformImg);
    Cplatform8.debug=true
    Cplatform8.setCollider("rectangle",0,-140,270,58)
    Cplatform9=createSprite(x+600,y-700,20,5)
    Cplatform9.addImage(platformImg);
    Cplatform9.debug=true
    Cplatform9.setCollider("rectangle",0,-140,270,58)
    Cplatform10=createSprite(x+600,y-1300,20,5)
    Cplatform10.addImage(SpikePlatformImg);
    Cplatform10.debug=true
    Cplatform10.setCollider("rectangle",0,-140,270,58)
    Cplatform11=createSprite(x+600,y-1900,20,5)
    Cplatform11.addImage(platformImg);
    Cplatform11.debug=true
    Cplatform11.setCollider("rectangle",0,-140,270,58)
    Cplatform12=createSprite(x+600,y-2500,20,5)
    Cplatform12.addImage(SpikePlatformImg);
    Cplatform12.debug=true
    Cplatform12.setCollider("rectangle",0,-140,270,58)
    Cplatform13=createSprite(x+600,y-3100,20,5)
    Cplatform13.addImage(platformImg)
    Cplatform13.debug=true
    Cplatform13.setCollider("rectangle",0,-140,270,58)

    



    Bplatform=createSprite(x+400,y+4500,20,5)
    Bplatform.addImage(platformImg);
    Bplatform.debug=true
    Bplatform.setCollider("rectangle",0,-140,270,58)    
    Bplatform2=createSprite(x+400,y+3900,20,5)
    Bplatform2.addImage(platformImg);
    Bplatform2.debug=true
    Bplatform2.setCollider("rectangle",0,-140,270,58)
    Bplatform3=createSprite(x+400,y+3300,20,5)
    Bplatform3.addImage(SpikePlatformImg);
    Bplatform3.debug=true
    Bplatform3.setCollider("rectangle",0,-140,270,58)
    Bplatform4=createSprite(x+400,y+2600,20,5)
    Bplatform4.addImage(platformImg);
    Bplatform4.debug=true
    Bplatform4.setCollider("rectangle",0,-140,270,58)
    Bplatform5=createSprite(x+400,y+2000,20,5)
    Bplatform5.addImage(SpikePlatformImg);
    Bplatform5.debug=true
    Bplatform5.setCollider("rectangle",0,-140,270,58)
    Bplatform6=createSprite(x+400,y+1400,20,5)
    Bplatform6.addImage(platformImg);
    Bplatform6.debug=true
    Bplatform6.setCollider("rectangle",0,-140,270,58)
    Bplatform7=createSprite(x+400,y+800,20,5)
    Bplatform7.addImage(SpikePlatformImg);
    Bplatform7.debug=true
    Bplatform7.setCollider("rectangle",0,-140,270,58)    
    Bplatform8=createSprite(x+400,y+200,20,5)
    Bplatform8.addImage(platformImg);
    Bplatform8.debug=true
    Bplatform8.setCollider("rectangle",0,-140,270,58)
    Bplatform9=createSprite(x+400,y-400,20,5)
    Bplatform9.addImage(platformImg);
    Bplatform9.debug=true
    Bplatform9.setCollider("rectangle",0,-140,270,58)
    Bplatform10=createSprite(x+400,y-1000,20,5)
    Bplatform10.addImage(SpikePlatformImg);
    Bplatform10.debug=true
    Bplatform10.setCollider("rectangle",0,-140,270,58)
    Bplatform11=createSprite(x+400,y-1600,20,5)
    Bplatform11.addImage(platformImg);
    Bplatform11.debug=true
    Bplatform11.setCollider("rectangle",0,-140,270,58)
    Bplatform12=createSprite(x+400,y-2200,20,5)
    Bplatform12.addImage(platformImg);
    Bplatform12.debug=true
    Bplatform12.setCollider("rectangle",0,-140,270,58)
    Bplatform13=createSprite(x+400,y-2800,20,5)
    Bplatform13.addImage(SpikePlatformImg);
    Bplatform13.debug=true
    Bplatform13.setCollider("rectangle",0,-140,270,58)
    Bplatform14=createSprite(x+400,y-3400,20,5)
    Bplatform14.addImage(platformImg);
    Bplatform14.debug=true
    Bplatform14.setCollider("rectangle",0,-140,270,58)
    
    
    Kplatform=createSprite(x-400,y+4500,20,5)
    Kplatform.addImage(platformImg);
    Kplatform.debug=true
    Kplatform.setCollider("rectangle",0,-140,270,58)    
    Kplatform2=createSprite(x-400,y+3900,20,5)
    Kplatform2.addImage(SpikePlatformImg);
    Kplatform2.debug=true
    Kplatform2.setCollider("rectangle",0,-140,270,58)
    Kplatform3=createSprite(x-400,y+3300,20,5)
    Kplatform3.addImage(platformImg);
    Kplatform3.debug=true
    Kplatform3.setCollider("rectangle",0,-140,270,58)
    Kplatform4=createSprite(x-400,y+2600,20,5)
    Kplatform4.addImage(platformImg);
    Kplatform4.debug=true
    Kplatform4.setCollider("rectangle",0,-140,270,58)
    Kplatform5=createSprite(x-400,y+2000,20,5)
    Kplatform5.addImage(SpikePlatformImg);
    Kplatform5.debug=true
    Kplatform5.setCollider("rectangle",0,-140,270,58)
    Kplatform6=createSprite(x-400,y+1400,20,5)
    Kplatform6.addImage(SpikePlatformImg);
    Kplatform6.debug=true
    Kplatform6.setCollider("rectangle",0,-140,270,58)
    Kplatform7=createSprite(x-400,y+800,20,5)
    Kplatform7.addImage(SpikePlatformImg);
    Kplatform7.debug=true
    Kplatform7.setCollider("rectangle",0,-140,270,58)    
    Kplatform8=createSprite(x-400,y+200,20,5)
    Kplatform8.addImage(SpikePlatformImg);
    Kplatform8.debug=true
    Kplatform8.setCollider("rectangle",0,-140,270,58)
    Kplatform9=createSprite(x-400,y-400,20,5)
    Kplatform9.addImage(platformImg);
    Kplatform9.debug=true
    Kplatform9.setCollider("rectangle",0,-140,270,58)
    Kplatform10=createSprite(x-400,y-1000,20,5)
    Kplatform10.addImage(SpikePlatformImg);
    Kplatform10.debug=true
    Kplatform10.setCollider("rectangle",0,-140,270,58)
    Kplatform11=createSprite(x-400,y-1600,20,5)
    Kplatform11.addImage(SpikePlatformImg);
    Kplatform11.debug=true
    Kplatform11.setCollider("rectangle",0,-140,270,58)
    Kplatform12=createSprite(x-400,y-2200,20,5)
    Kplatform12.addImage(SpikePlatformImg);
    Kplatform12.debug=true
    Kplatform12.setCollider("rectangle",0,-140,270,58)
    Kplatform13=createSprite(x-400,y-2800,20,5)
    Kplatform13.addImage(SpikePlatformImg);
    Kplatform13.debug=true
    Kplatform13.setCollider("rectangle",0,-140,270,58)
    Kplatform14=createSprite(x-400,y-3400,20,5)
    Kplatform14.addImage(platformImg);
    Kplatform14.debug=true
    Kplatform14.setCollider("rectangle",0,-140,270,58)

    Xplatform=createSprite(x+800,y+4500,20,5)
    Xplatform.addImage(platformImg);
    Xplatform.debug=true
    Xplatform.setCollider("rectangle",0,-140,270,58)    
    Xplatform2=createSprite(x+800,y+3900,20,5)
    Xplatform2.addImage(SpikePlatformImg);
    Xplatform2.debug=true
    Xplatform2.setCollider("rectangle",0,-140,270,58)
    Xplatform3=createSprite(x+800,y+3300,20,5)
    Xplatform3.addImage(platformImg);
    Xplatform3.debug=true
    Xplatform3.setCollider("rectangle",0,-140,270,58)
    Xplatform4=createSprite(x+800,y+2600,20,5)
    Xplatform4.addImage(platformImg);
    Xplatform4.debug=true
    Xplatform4.setCollider("rectangle",0,-140,270,58)
    Xplatform5=createSprite(x+800,y+2000,20,5)
    Xplatform5.addImage(SpikePlatformImg);
    Xplatform5.debug=true
    Xplatform5.setCollider("rectangle",0,-140,270,58)
    Xplatform6=createSprite(x+800,y+1400,20,5)
    Xplatform6.addImage(platformImg);
    Xplatform6.debug=true
    Xplatform6.setCollider("rectangle",0,-140,270,58)
    Xplatform7=createSprite(x+800,y+800,20,5)
    Xplatform7.addImage(SpikePlatformImg);
    Xplatform7.debug=true
    Xplatform7.setCollider("rectangle",0,-140,270,58)    
    Xplatform8=createSprite(x+800,y+200,20,5)
    Xplatform8.addImage(platformImg);
    Xplatform8.debug=true
    Xplatform8.setCollider("rectangle",0,-140,270,58)
    Xplatform9=createSprite(x+800,y-400,20,5)
    Xplatform9.addImage(platformImg);
    Xplatform9.debug=true
    Xplatform9.setCollider("rectangle",0,-140,270,58)
    Xplatform10=createSprite(x+800,y-1000,20,5)
    Xplatform10.addImage(platformImg);
    Xplatform10.debug=true
    Xplatform10.setCollider("rectangle",0,-140,270,58)
    Xplatform11=createSprite(x+800,y-1600,20,5)
    Xplatform11.addImage(platformImg);
    Xplatform11.debug=true
    Xplatform11.setCollider("rectangle",0,-140,270,58)
    Xplatform12=createSprite(x+800,y-2200,20,5)
    Xplatform12.addImage(SpikePlatformImg);
    Xplatform12.debug=true
    Xplatform12.setCollider("rectangle",0,-140,270,58)
    Xplatform13=createSprite(x+800,y-2800,20,5)
    Xplatform13.addImage(platformImg);
    Xplatform13.debug=true
    Xplatform13.setCollider("rectangle",0,-140,270,58)
    Xplatform14=createSprite(x+800,y-3400,20,5)
    Xplatform14.addImage(platformImg);
    Xplatform14.debug=true
    Xplatform14.setCollider("rectangle",0,-140,270,58)

  
}

function draw() {
  background(255,255,255);  


  camera.position.y=astronaut.y
  camera.position.x=astronaut.x

  //backGround.velocityY=-2
  

  
  
  astronaut.velocityY=astronaut.velocityY+0.8


  astronaut.collide(platform)

  astronaut.collide(Lplatform)
  astronaut.collide(Lplatform2)
  //astronaut.collide(Lplatform3)
  astronaut.collide(Lplatform4)
  
  astronaut.collide(Lplatform6)
  astronaut.collide(Lplatform7)
  astronaut.collide(Lplatform8)
  astronaut.collide(Lplatform10)
  astronaut.collide(Lplatform11)
  astronaut.collide(Lplatform13)
  astronaut.collide(Lplatform14)
  
  astronaut.collide(Rplatform)
  //astronaut.collide(Rplatform2)
  astronaut.collide(Rplatform3)
  astronaut.collide(Rplatform4)
  astronaut.collide(Rplatform5)
  //astronaut.collide(Rplatform6)
  astronaut.collide(Rplatform7)
  astronaut.collide(Rplatform8)
  //astronaut.collide(Rplatform9)
  astronaut.collide(Rplatform10)
  //astronaut.collide(Rplatform11)
  astronaut.collide(Rplatform12)
  astronaut.collide(Rplatform13)
  
  //a/stronaut.collide(Aplatform)
  astronaut.collide(Aplatform2)
  astronaut.collide(Aplatform3)
  //astronaut.collide(Aplatform4)
  astronaut.collide(Aplatform5)
  //astronaut.collide(Aplatform6)
  astronaut.collide(Aplatform7)
  astronaut.collide(Aplatform8)
  //astronaut.collide(Aplatform9)
  ///astronaut.collide(Aplatform10)
  astronaut.collide(Aplatform11)
  astronaut.collide(Aplatform12)
  ///astronaut.collide(Aplatform13)
  
  //astronaut.collide(Cplatform)
  astronaut.collide(Cplatform2)
  astronaut.collide(Cplatform3)
  //astronaut.collide(Cplatform4)
  //astronaut.collide(Cplatform5)
  astronaut.collide(Cplatform6)
  ///astronaut.collide(Cplatform7)
  astronaut.collide(Cplatform8)
  astronaut.collide(Cplatform9)
  //astronaut.collide(Cplatform10)
  astronaut.collide(Cplatform11)
  //astronaut.collide(Cplatform12)
  astronaut.collide(Cplatform13)
  
  
  astronaut.collide(Bplatform)
  astronaut.collide(Bplatform2)
  //astronaut.collide(Bplatform3)
  astronaut.collide(Bplatform4)
  //astronaut.collide(Bplatform5)
  astronaut.collide(Bplatform6)
  //astronaut.collide(Bplatform7)
  astronaut.collide(Bplatform8)
  astronaut.collide(Bplatform9)
  //astronaut.collide(Bplatform10)
  astronaut.collide(Bplatform11)
  astronaut.collide(Bplatform12)
  //astronaut.collide(Bplatform13)
  astronaut.collide(Bplatform14)
  
  astronaut.collide(Kplatform)
  //astronaut.collide(Kplatform2)
  astronaut.collide(Kplatform3)
  astronaut.collide(Kplatform4)
  //astronaut.collide(Kplatform5)
  //astronaut.collide(Kplatform6)
  //astronaut.collide(Kplatform7)
  //astronaut.collide(Kplatform8)
  astronaut.collide(Kplatform9)
  //astronaut.collide(Kplatform10)
  //astronaut.collide(Kplatform11)
  //astronaut.collide(Kplatform12)
  //stronaut.collide(Kplatform13)
  //astronaut.collide(Kplatform14)
  
  astronaut.collide(Xplatform)
  //astronaut.collide(Xplatform2)
  astronaut.collide(Xplatform3)
  astronaut.collide(Xplatform4)
  //astronaut.collide(Xplatform5)
  astronaut.collide(Xplatform6)
  //astronaut.collide(Xplatform7)
  astronaut.collide(Xplatform8)
  astronaut.collide(Xplatform9)
  astronaut.collide(Xplatform10)
  astronaut.collide(Xplatform11)
  //astronaut.collide(Xplatform12)
  astronaut.collide(Xplatform13)
  astronaut.collide(Xplatform14)


if(keyWentDown(UP_ARROW)  ) {

  astronaut.velocityY=-25
 //jumpSound.play();


}



if(keyDown(LEFT_ARROW)){

  astronaut.x=astronaut.x-13
  //moveSound.play();

}

if(keyDown(RIGHT_ARROW)){

  astronaut.x=astronaut.x+13
  //moveSound.play();

}


if(astronaut.collide(Lplatform3)||astronaut.collide(Lplatform5)||astronaut.collide(Lplatform9)||astronaut.collide(Lplatform12)||astronaut.collide(Rplatform6)||astronaut.collide(Rplatform9)||astronaut.collide(Rplatform11)||astronaut.collide(Aplatform)||astronaut.collide(Aplatform4)||astronaut.collide(Aplatform6)||astronaut.collide(Aplatform9)||astronaut.collide(Aplatform10)||astronaut.collide(Aplatform13)||astronaut.collide(Cplatform)||astronaut.collide(Cplatform4)||astronaut.collide(Cplatform5)||astronaut.collide(Cplatform7)||astronaut.collide(Cplatform10)||astronaut.collide(Cplatform12)||astronaut.collide(Bplatform3)||astronaut.collide(Bplatform5)||astronaut.collide(Bplatform7)||astronaut.collide(Bplatform10)||astronaut.collide(Bplatform13)||astronaut.collide(Kplatform)||astronaut.collide(Kplatform2)||astronaut.collide(Kplatform5)||astronaut.collide(Kplatform6)||astronaut.collide(Kplatform7)||astronaut.collide(Kplatform8)||astronaut.collide(Kplatform10)||astronaut.collide(Kplatform11)||astronaut.collide(Kplatform12)||astronaut.collide(Kplatform13)||astronaut.collide(Xplatform2)||astronaut.collide(Xplatform5)||astronaut.collide(Xplatform7)||astronaut.collide(Xplatform12)){
  
  astronaut.x=10000 
  astronaut.velocityY=0
  astronaut.addImage(astronaut_falling);
  textSize(500)
  text("YOU DIED",10000,4500)
  

}

  

  
  






if (backGround.y<50 && backGround.y>400  ){

backGround.y=backGround.height/2

}

console.log(astronaut.y)

createPlatform();

  drawSprites();
}



function createPlatform() {





}








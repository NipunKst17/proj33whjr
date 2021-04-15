const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine, world;
var snow = [];
var bg;
var boyimg, boy;

function preload(){
  bg = loadImage ("snow1.jpg");
  boyimg = loadImage ("boyImg.png");
}

function setup() {
  createCanvas(1532,720);
  
  boy = createSprite(200,630,80,200);
  engine = Engine.create();
  world = engine.world;
}

function draw() {

  Engine.update(engine);
  background(bg);

  if(frameCount % 60 === 0)
  { 
    snow.push(new Snow(random(30, width-30), 35, 35)); 
  } 

  for (var j = 0; j < snow.length; j++) {
   snow[j].display(); 
  }
  
  boy.addImage("b", boyimg);
  boy.scale = 0.3;

  if(keyWentDown("LEFT_ARROW") && (boy.x > 40)){
    boy.x = boy.x - 40;
  }

  if(keyWentDown("RIGHT_ARROW") && (boy.x < 1482)){
    boy.x = boy.x + 40;
  }

  if(keyWentDown("space")){
    boy.y = boy.y - 100;
  }

  if(keyWentUp("space")){
   boy.y = boy.y + 100;
  }

  drawSprites();
}


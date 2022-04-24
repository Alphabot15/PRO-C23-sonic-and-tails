var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var backgroundImg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;

function preload()
{
	helicopterIMG=loadImage("tails2.gif")
	packageIMG=loadImage("sonic.png")
	backgroundImg=loadImage("fondo.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.08

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.9

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(250,620,20,100);
	box2 = new Box(360,650,200,20);
	box3 = new Box(470,620,20,100);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
  console.log(packageBody)
}

function keyPressed() {
if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody, false);    
  }
if(keyCode === LEFT_ARROW){
helicopterSprite.x=helicopterSprite.x-10;
Matter.Body.translate(packageBody, {x:-10,y:0})
}
if(keyCode === RIGHT_ARROW){
helicopterSprite.x=helicopterSprite.x+10;
Matter.Body.translate(packageBody, {x:+10,y:0})
}
}





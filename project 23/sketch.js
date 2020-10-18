var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottomSprite,bottomBody,rightSprite,rightBody,leftSprite,leftBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomSprite=createSprite(width/2,650,200,20);
	bottomSprite.shapeColor=color("red");

	rightSprite=createSprite(490,590,20,100);
	rightSprite.shapeColor=color("red");

	leftSprite=createSprite(310,590,20,100);
	leftSprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	bottomBody=Bodies.rectangle(width/2,650,200,20,{isStatic:true});
	  World.add(world,bottomBody);
	  
	rightBody=Bodies.rectangle(490,590,20,100,{isStatic:true});
      World.add(world,rightBody);
	  
	leftBody=Bodies.rectangle(310,590,20,100,{isStatic:true});
      World.add(world,leftBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  keyPressed();
 
  drawSprites();

  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}




var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	

	packageSprite=createSprite(width/2, 80,10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	platform1= createSprite(width/2,630,200,20)
	platform1.shapeColor=color(255,0,0)
	platform2= createSprite(285,645,20,100)
	platform2.shapeColor= color(255,0,0)
	platform3= createSprite(515,645,20,100)
	platform3.shapeColor= color(255,0,0)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	platform1Body= Bodies.rectangle(width/2,650,200,20, {isStatic:true})
	 World.add(world,platform1Body)
	  
	platform2Body= Bodies.rectangle(290,610,20,100,{isStatic:true})
	World.add(world,platform2Body)
	
	platform3Body= Bodies.rectangle(510,610,20,100,{isStatic:true})
	World.add(world,platform3Body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  platform1.x= platform1Body.position.x
  platform1.y= platform1Body.position.y
  platform2.x= platform2Body.position.x
  platform2.y=platform2Body.position.y
  platform3.x=platform3Body.position.x
  platform3.y=platform3Body.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Body.setStatic(packageBody,false)
   if (touching(packageBody,ground)){
	   text("Package has been safely delivered.",width/2,height/2)
	   platform1.shapeColor= color(0,255,0)
   }
    
  }
}




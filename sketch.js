
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bar, bob1, bob2, bob3, bob4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bar= new roof(300, 200, 500, 30)
	bob1= new bob(300, 700, 30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bar.display();
  bob1.display();

  drawSprites();
 
}




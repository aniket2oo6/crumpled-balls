
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var engine,world;
var ground1,paper1,dustbin1;

function setup() {

	createCanvas(800, 700);

	//createEdgeSprites();

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,670,800,30);
	paper1 = new Paper(190,650,30);
	dustbin1 = new Dustbin(700,645,15,PI/7);
	dustbin2 = new Dustbin(730,620,15,PI/2);
	dustbin3 = new Dustbin(665,620,15,PI/2);
	

	Engine.run(engine);
  
}


function draw() {

  background(0);

  Engine.update(engine);
  
 ground1.display();
 paper1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 
}


	

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bob1,bob2,bob3,bob4,bob5,roof1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  Engine.run(engine)
	//Create the Bodies Here.
bob1=new bob(334,500,60,60)
bob2=new bob(275,500,60,60)
bob3=new bob (393,500,60,60)
bob4=new bob(455,500,60,60)
bob5=new bob(519,500,60,60)
roof1=new roof(375,300,300,30)
World.add(world,roof1)
rope1=new rope(bob1.body,roof1.body)

}

	
  



function draw() {
  rectMode(CENTER);
  background(0255,255,255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 roof1.display();
 rope1.display();

 
}




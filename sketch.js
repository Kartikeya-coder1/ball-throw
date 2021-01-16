var ground;
var ball, wall,wall1, wall2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		ball = new Paper(200,200,20);
		wall = new Dustbin(700,640,20,100);
		wall1 = new Dustbin(760,680,100,20);
		wall2 = new Dustbin(800,640,20,100);
		ground = new Ground(450,690,900,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
Engine.update(engine); 
ground.display();
ball.display();
wall.display();
wall1.display();
wall2.display() ;



  drawSprites();
 
}



function keyPressed(){
	if (keyCode === UP_ARROW)  {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-60});
	}
}







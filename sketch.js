const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground1,box1,box2,box3,paper1

function preload()
{
	boximage = loadImage('box.png');
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	
	box2 = new Box(1185,420,15,170);
	box3 = new Box(1015,420,15,170);
	box1 = new Box(1100,495,150,15);
	ground1 = new Ground(700,550,1400,30);
	
	paper1 = new Paper(200,300,70);

	sling1=new SlingShot(paper1.body,{x:200,y:300});
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,237,227);
	Engine.update(engine);
	
	
	paper1.display();
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	image(boximage,1000,333,200,200);
	sling1.display()
	
 
}

	function mouseDragged()	{
		
		Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});

		
	}

	function mouseReleased() {
		sling1.fly()

	}

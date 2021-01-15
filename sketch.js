
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var Score = 0 

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
	ground = new Ground(350,30,100,20)
	block1 = new Box (330,235,30,40)
	block2 = new Box (360,235,30,40)
	block3 = new Box (390,235,30,40)
	block4 = new Box (420,235,30,40)
	block5 = new Box (450,235,30,40)
	block6 = new Box (360,195,30,40)
	block7 = new Box (390,195,30,40)
	block8 = new Box (420,195,30,40)
	block9 = new Box (390,155,30,40)

	polygon = Bodies.circle(50,200,20)
	World.add(world,polygon)

	this.polygonI = loadImage('polygon.png')

	slingshot = new SlingShot(this.polygon,{x:100,y:200})

	imageMode(CENTER)
	image(polygonI,polygon.position.x,polygon.position.y,40,40)
	
	Engine.run(engine);
  
}


function draw() {
 
	Engine.update(engine);

	text("score" + Score, width -300,50)

	ground.display()
	
	block1.score()
	block2.score()
	block3.score()
	block4.score()
	block5.score()
	block6.score()
	block7.score()
	block8.score()
	block9.score()
	


  drawSprites();
 
}


function mouseDragged(){
    
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(bird.body);
    }
}
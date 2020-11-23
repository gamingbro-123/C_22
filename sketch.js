const Engine = Matter.Engine; //laws of Physics
const World = Matter.World; // will apply the laws of physics on all the bodies inside the world
const Bodies = Matter.Bodies; //individual body properties


var engine, world;
var box, ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create()
  world = engine.world;

  var box_options = {restitution:1}
  box = Bodies.rectangle(200,100,50,50,box_options) //x,y,width, height
  console.log(box)
  World.add(world,box)

  var ground_options = { 
                         isStatic : true
}
  ground = Bodies.rectangle(width/2,height-10,width,20,ground_options)
  World.add(world,ground)

  ball = Bodies.circle(100,200,20);
  World.add(world,ball)
  
}

function draw() {
  background(220,255,255);  
  
  Engine.update(engine);
  
  rectMode(CENTER)

  rect(box.position.x,box.position.y,50,50)
  rect(ground.position.x,ground.position.y,width,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

}
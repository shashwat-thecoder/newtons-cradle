const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pendulums = [];
var slings = [];
var mConstraint;


function setup() {
  createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;

  for(var i = 0; i < 5; i++){
    pendulums.push(new Pendulum(40 * (i+1) + 200, 200, 'black'))
    slings.push(new Sling(pendulums[i].body, {x: 40 * (i+1) + 200, y: 10} ))
  }
}

function draw() {
  background(220);

  for(var i in pendulums){
    slings[i].display();
    pendulums[i].display()
  }

  Engine.update(engine)
}

function keyPressed() { 
  if (keyCode === UP_ARROW) { 
    Matter.Body.applyForce(pendulums[0].body,pendulums[0].body.position,{x:50,y:-45}); 
  } 
}

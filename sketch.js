const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions=[];
var plinko=[];
var particle=[]

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(240,780,480,20);

  for(var i=5;i<width;i=i+78){
    divisions.push(new Division(i,600,10,340));
  }

 
   for(var j=10;j<width;j=j+48){
    plinko.push(new Plinko(j,75))
    }

    for(var j=34;j<width-24;j=j+48){
      plinko.push(new Plinko(j,175))
      }

      for(var j=10;j<width;j=j+48){
        plinko.push(new Plinko(j,275))
        }

        for(var j=34;j<width-24;j=j+48){
          plinko.push(new Plinko(j,375))
          }
  
 
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();

  if(frameCount%20===0){
    particle.push(new Particle(random(10,470),0));
  }
  for(var i=0;i<particle.length;i++){
    particle[i].display();
  }

 for(var i=0; i<divisions.length;i++){
   divisions[i].display();
 }

 for(var j=0;j<plinko.length;j++){
   //for(var k=0;k<plinko.length;k++)
   plinko[j].display();
 
 }

 
}
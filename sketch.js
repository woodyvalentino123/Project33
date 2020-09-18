
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//var particles = [];
var particle;
var plinkos = [];
var division = [];
var divisionHeight = 300;
var radius = 10;
var count = 0;
var gameState = "play"
var turn =0;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
     ground = new Ground(240,790);
     ground1 = new Ground(240,770);
     
     
        
     

     for (var k=-75; k<width;k = k+80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
     }
     for (var l=-40; l<=width-10; l = l+50){
      plinkos.push(new Plinko(l,75,radius))
      }

      for (var l=40; l<=width-10;l = l+50){
        plinkos.push(new Plinko(l,175,radius))
      }
      for (var l=-40; l<=width;l = l+50){
        plinkos.push(new Plinko(l,275,radius))
        }
  
        for (var l=40; l<=width-10;l = l+50){
          plinkos.push(new Plinko(l,375,radius))
        }
        
      
  Engine.run(engine);
  
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  ground.display();
  ground1.display1();
  
  for (var i = 1; i< division.length; i = i+1){
    
    division[i].display();
 
  }
  
  for (p = 1; p< plinkos.length; p = p+1){
  plinkos[p].display();
  }

  if(particle!==null){
    particle.display();
    
  }
    
        if(turn>=5){
          gameState="end";
          stroke(5)
          fill('Brown')
          text("Game Over ",200,200)
        }

 stroke(4);   
 fill('white')  
 text ("Score : "+ count,10,20);
  
  drawSprites();
 
}

function mousePressed(){
  if(gameState==="play"){
    turn++;
    particle = new Particle(mouseX,10,10);

  }
}

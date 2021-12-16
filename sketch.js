var backgroundIMG

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var engine, world
function preload()
{
backgroundIMG=loadImage("Soccer.jpeg");
}

function setup() {
createCanvas(1200,700);
engine=Engine.create();
world=engine.world;
goal=new Goal();
ground= new Ground(600,380,10,600);
ground2 = new Ground(600,690,10,600)
ball = new Ball(600,650);
}

function draw() {
background(backgroundIMG);
goal.display();
ground.display();
ground2.display();
ball.display();
}
function mousePressed()
{
    Matter.body.applyForce(ball.body,ball.body.position,{x:0.0,y:-0.01})
}
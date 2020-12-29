const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,pkg,ppkg,pnkg,dpng,dng;
var box1, packageBody,package;
var box2, box3
var ground,lol;

function preload(){
    pnkg=loadImage("paper.png")
    dng=loadImage("dustbingreen.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    
    
    engine = Engine.create();
    ppkg=createSprite(width/2, 80, 10,10);
	ppkg.addImage(pnkg)
    ppkg.scale=0.3
    ppkg.depth=5
    dpkg=createSprite(900, 290, 10,10);
	dpkg.addImage(dng)
    dpkg.scale=0.6
    dpkg.depth=4
	world = engine.world;
    ground = new Ground(600,height,1200,20)
    box1 = new Box(827.5,290,15,199);
    box2 = new Box(900,382,130,15);
    box3 = new Box(972.5,290,15,199)
    // packageBody = new Ball(800,100,25)
    pkg = Bodies.circle(200 , 285 , 20 , {restitution:0.5, isStatic:false, friction:2000.0, density : 1.0});
	World.add(world, pkg);
}

function draw(){
    background(255);
	Engine.update(engine);
    
    ppkg.x=pkg.position.x
    ppkg.y=pkg.position.y
	
	
    ground.display();
    box1.display();
   box2.display();
   
   box3.display();
   
    // packageBody.display();
    keyey();
	drawSprites();

}
function keyey (){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce( pkg, pkg.position, {x: 1.5, y: -1.5});
    }
    else if (keyCode === DOWN_ARROW) {
        Matter.Body.applyForce( pkg, pkg.position, {x: .0, y: -.0});
    }
}

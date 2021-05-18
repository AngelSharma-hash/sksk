const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var platform;
 var ground;
 var box1;
 var box2;
 var box3;
 var box4;
 var box5;
 var box6;
 var box7;
 var box8;
 var box9;
 var box10;
 var box11;
 var box12;
 var box13;
 var box14;
 var box15;
 var box16;
 var box17;
 var box18;
 var box19;
 var box20;
 var box21;
 var box22;
 var box23;
 var box24;
 var box25;
 var slingimg;

 var polygon1;
 var sling1;

 function preload(){
     slingimg = loadImage("NicePng_hexagon-png_243164.png");

 }


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    polygon1 = createSprite(width/2, 80, 40,40);
    polygon1.addImage(slingimg);
    polygon1.scale=0.1;

    polygon = Bodies.circle(50,200,20);
    World.add(world, polygon);



    //layer1
    box1 = new Box(330,455,35,35);
    box2 = new Box(370,455,35,35);
    box3 = new Box(410,455,35,35);
    box4 = new Box(450,455,35,35);
    box5 = new Box(490,455,35,35);
    box6 = new Box(530,455,35,35);
    box7 = new Box(570,455,35,35);
    box8 = new Box(610,455,35,35);
    box9 = new Box(650,455,35,35);   

    //layer2
    box10 = new Box(370,415,35,35);
    box11= new Box(410,415,35,35);
    box12= new Box(450,415,35,35);
    box13= new Box(490,415,35,35);
    box14= new Box(530,415,35,35);
    box15= new Box(570,415,35,35);
    box16= new Box(610,415,35,35);

    //layer3
    box17= new Box(410,375,35,35);
    box18= new Box(450,375,35,35);
    box19= new Box(490,375,35,35);
    box20= new Box(530,375,35,35);
    box21= new Box(570,375,35,35);

    //layer4
    box22= new Box(450,335,35,35);
    box23= new Box(490,335,35,35);
    box24= new Box(530,335,35,35);

    //layer5
    box25= new Box(490,295,35,35);

       

    ground = new Ground(100,300,40,40);
    platform = new Ground(510, 500, 380, 20);

   

    sling1 = new Sling(this.polygon,{x:100,y:200});
   
  

}

function draw(){
    background(0,0,0);
    //text(mouseX+","+mouseY,30,50)
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();

    polygon1.x = polygon.position.x;
    polygon1.y = polygon.position.y;

    //Matter.Body.setStatic(polygon, true);

    platform.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();   
    box6.display();   
    box7.display();   
    box8.display(); 
    box9.display();  
    box10.display();  
    box11.display();  
    box12.display();  
    box13.display();  
    box14.display();  
    box15.display();  
    box16.display(); 
    box17.display();  
    box18.display();   
    box19.display();  
    box20.display();  
    box21.display();
    box22.display();  
    box23.display();
    box24.display();
    box25.display();

    sling1.display();

    drawSprites();
  
     
}

function mouseDragged(){

    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}
  
function mouseReleased(){
    
sling1.fly();

}


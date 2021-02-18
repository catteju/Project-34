const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var pendalum1, pendalum2, pendalum3, pendalum4, pendalum5; 
var sling1, sling2, sling3, sling4, sling5;

function setup() {
  createCanvas(windowWidth/2,windowHeight/2);
  engine = Engine.create();
  world = engine.world;

  pendalum1 = new Ball(200, 300, 35);
  pendalum2 = new Ball(275, 300, 35);
  pendalum3 = new Ball(350, 300, 35);
  pendalum4 = new Ball(425, 300, 35);
  pendalum5 = new Ball(500, 300, 35);

  sling1 = new SlingShot(pendalum1.body, {x: 200, y: 100});
  sling2 = new SlingShot(pendalum2.body, {x: 275, y: 100});
  sling3 = new SlingShot(pendalum3.body, {x: 350, y: 100});
  sling4 = new SlingShot(pendalum4.body, {x: 425, y: 100});
  sling5 = new SlingShot(pendalum5.body, {x: 500, y: 100});
  
}

function draw() {
  background("pink");
  Engine.update(engine);

   pendalum1.display();
   pendalum2.display();
   pendalum3.display();
   pendalum4.display();
   pendalum5.display();
     
   sling1.display();
   sling2.display();
   sling3.display();
   sling4.display();
   sling5.display();
}

  function mouseDragged(){
  Matter.Body.setPosition(pendalum1.body,{x: mouseX, y: mouseY });
}

/*function mouseDragged(){
  Matter.Body.setPosition(pendalum2.body,{x: mouseX, y: mouseY });
}

function mouseDragged(){
  Matter.Body.setPosition(pendalum3.body,{x: mouseX, y: mouseY });
}

function mouseDragged(){
  Matter.Body.setPosition(pendalum4.body,{x: mouseX, y: mouseY });
}

function mouseDragged(){
  Matter.Body.setPosition(pendalum5.body,{x: mouseX, y: mouseY });
}*/
// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine

*/
var ground;
var ball1;
var launchX,launchY;
var launcherX, launcherY;
var flag = "start"

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(800,430);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground(200,420,1200,20);
    tanker = new Tanker(20,310,100,100);
    tankerhead = new TankerHead(80,320,55,25);
    ball1 = new Ball(300,100,15);
    ball2 = new Ball(400,200,15);
    ball3 = new Ball(500,150,15);
    ball4 = new Ball(600,100,15);
    ball5 = new Ball(688,80,15);
    ball6 = new Ball(780,50,15);

    canonball = new CanonBall(20,20);
    shot = new ShootBall(canonball.body, { x: 70, y: height - 220 });
}

function draw() {
// Remember to update the Matter Engine and set the background. add display
    background("biege");
    Engine.update(engine);
    
    ground.display();
    tankerhead.display();
    tanker.display();
    
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();

    canonball.display();
    shot.display();
    if (keyIsDown(UP_ARROW)) {
        shot.attach(canonball.body)
    }
    
}


function keyReleased() {
    // Call the shoot method for the cannon.
    if (keyCode === (DOWN_ARROW)) {
        flag = "launch"
        shot.shoot();
    }
}

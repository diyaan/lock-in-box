//https://diyaan.github.io/BrickGame/

var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var Render = Matter.Render;
var engine; 
var world;
var paddle;
var ball;
var paddleWidth=100;
var paddleHeight=10;
var paddle_x =150;
var paddle_y = 350;
var boundryleft
var boundryright


function setup() {
	fill(0);
	createCanvas(400 , 400);

	engine = Engine.create();
	world = engine.world;
	world.gravity=0
	ball = Bodies.circle(150 , 200 , 5 , {isStatic:false , restitution:0.10, label:'ball'});
	paddle = Bodies.rectangle(paddle_x , paddle_y , paddleWidth , paddleHeight , {isStatic:true,label:'paddle'} );
	World.add(world , ball);
	World.add(world , paddle);
	boundryleft = Bodies.rectangle(0 , 0 , 400 , 10 , {isStatic:true,label:'boundryleft'} );
	boundryright = Bodies.rectangle(0 , 390 , 400 , 10 , {isStatic:true,label:'boundryright'} );
	World.add(world , boundryleft);
	World.add(world , boundryright);

	Matter.Events.on(engine,'collisionStart');
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
}


function draw()
 {
 	background(0);
 	//fill(0)
	//rectangle(0 , 0 , 400 , 10);
	//boundry = Bodies.rectangle(0 , 390 , 400 , 10);

	fill( 255 )
	rect(paddle_x , paddle_y  , 100 , 20);


	if (keyIsDown(LEFT_ARROW) && paddle_x>0)
	{
		Body.setPosition(paddle,{paddle_x:paddle_x-5 , paddle_y:y})
	}

		if (keyIsDown(RIGHT_ARROW) && paddle_x<390)
	{
		Body.setPosition(paddle,{paddle_x:paddle_x+5 , paddle_y:y})
	}

    fill( 255 )
	circle(ball.position.x , ball.position.y , 10);
}

	
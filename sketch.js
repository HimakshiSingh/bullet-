var bullet,wall;
function setup() {
  var canvas = createCanvas(1600, 400);
  
  speed=random(203,60)
  weight=random(300,52)
  bullet=new Bullet(weight,speed);
  wall=createSprite(1500,200, 60, height/2)
  wall.shapeColor=color(80,80,80)
  thickness = random(22,83)
}


function draw() {
  background(0);  
  if(isTouching(wall,bullet)){

  damage();
     wall.velocityX = 0
	 bullet.velocityX  = 0;
  }
  
  drawSprites();
 
}

function isTouching (obj1,obj2){
	if(obj1.x-obj2.x<(obj1.width/2)+(obj2.width/2)){
	console.log("touches")
	return true
	}
}
function damage(){
	var damage = 0.5 * bullet.weight * bullet.speed* bullet.speed/wall.thickness*wall.thickness*wall.thickness ;
	if(damage > 10)
	{
		wall.shapeColor=color("yellow");
	}

	if(damage<10 && damage > 50)
	{
		wall.shapeColor=color("blue");
	}

	if(damage<50)
	{
		wall.shapeColor=color("green");
	}
}
	
	
class Ball
{
	constructor(x,y)
	{
		var options={
            'restitution':1,

			
			}
	
	this.x=x;
	this.y=y;
		
		this.body=Bodies.circle(x,y,50,options)
		World.add(world,this.body);
	}
	display()
	{
			
			var pos=this.body.position;
			pos.x = this.body.position.x
			pos.y = this.body.position.y
			var angle = this. body.angle
			push()
			translate(pos.x, pos.y);

			rotate(angle)
			ellipseMode(CENTER)
			
			//strokeWeight(3)
			fill(0,0,55)
			ellipse(0,0,50,50);
			pop()
			
	}

}

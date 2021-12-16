class Goal
{
	constructor()
	{
		var options={
			isStatic:true,
			
			}
//		this.x=x;
//		this.y=y;
//		this.r=r
		
		this.body=Bodies.rectangle(600,320,300,180,options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			push()
			translate(pos.x,pos.y);
			rectMode(CENTER)
			fill(255,0,255)
			rect(0,0,200,100);
			pop()
			
	}

}


/*class Snow{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r = r;
		this.image=loadImage("snowImg.jpg")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{	
		push()
		translate(this.body.position.x, this.body.position.y);
		rotate(this.body.angle)
		imageMode(CENTER);
		//rectMode(CENTER);
		image(this.image, 0, 0, r*2, r*2)
		pop()
 }
}*/

class Snow{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :1,
		}
		this.x=x;
		this.y=y;
		this.r = r;
		this.image=loadImage("snow.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);
	}

	display()
	{	
		push();
		translate(this.body.position.x, this.body.position.y);
		rotate(this.body.angle);
		//fill(255,0,255);
		imageMode(CENTER);
		//ellipseMode(RADIUS);
		//ellipse(0,0,this.r);
		image(this.image, 0, 0, this.r*2, this.r*2);
		pop();
    }
} 
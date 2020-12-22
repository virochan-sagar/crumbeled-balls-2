class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        this.image=loadImage("paper.png");
	    World.add(world, this.body);
       
        
   }
   display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x, this.body.position.y,this.radius+50,this.radius+50);
    /*fill("red");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);*/
   }
}
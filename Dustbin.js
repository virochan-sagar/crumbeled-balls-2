class Dustbin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }
        
        this.bodyb = Bodies.rectangle(x,y, width, height,options );
        this.image=loadImage("dustbingreen.png");
        this.bodyb.width = width
        this.bodyb.height = height 
        World.add(world, this.bodyb);
	   // this.bodyl= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	    //World.add(world, this.bodyl);
	    //this.bodyr = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        //World.add(world, this.bodyr);
        
        
   }
   display(){
       imageMode(CENTER);
       image(this.image,this.bodyb.position.x, this.bodyb.position.y,this.bodyb.width,this.bodyb.height+200);
       //rectMode(CENTER)
       //fill("white");
       //rect(this.bodyb.position.x, this.bodyb.position.y,this.bodyb.width, this.bodyb.height)
       //rect((this.bodyb.position.x-(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
       //rect((this.bodyb.position.x+(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
   }
}
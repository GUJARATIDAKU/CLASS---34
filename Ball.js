class Ball{
    constructor(x,y,r){
        var options={
            'restitution': 1,
            'friction':1.0,
            'density':1.0
        }
        
        this.r = r
  
        this.body = Bodies.circle(x,y,this.r/2,options);
  
        World.add(world,this.body);
    
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        stroke("blue")
        strokeWeight(5)
        fill("green");
        ellipse(0,0,this.r,this.r)
        pop();
    }
}
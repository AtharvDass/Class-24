class Paper{
    constructor(){
        var options={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(100,200,25,options);
        World.add(world,this.body);
    }
    display(){
    
     
    push();
    translate(this.body.position.x,this.body.position.y);
    ellipseMode(RADIUS);
    ellipse(0,0,25,25);
    pop();
    }
}
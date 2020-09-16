class Particle{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitiution : 0.8,
            density:0.01
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.color = color(random(0,255),random(0,255),random(0,255));

    this.radius = radius;
    World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    push();
    ellipseMode(CENTER);
    fill(this.color)
    ellipse(pos.x,pos.y,this.radius,20)
}

}
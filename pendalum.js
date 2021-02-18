class Ball {
    constructor(x, y, radius){
        var options={
            density: 1,
            isStatic: false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        stroke("green");
        strokeWeight(4);
        fill("red");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}
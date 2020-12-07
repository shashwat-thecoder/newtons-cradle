class Pendulum{

    constructor(x, y, color){
        var options = {
            frictionAir : 0.0,
            friction : 0,
            restituition : 1,
            slop : 1,
            inertia : Infinity
        }
        this.x = x;
        this.y = y;
        this.color = color;
        this.body = Bodies.circle(this.x, this.y, 20, options)
        
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        push()
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipse(0, 0, 40, 40);
        pop()

        console.log("in")
    }
}
class Sling{

    constructor(bodyA, pointB){

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 120
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            let bodyA = this.sling.bodyA.position;
            let bodyB = this.pointB;

            push()
            strokeWeight(4);
            line(bodyB.x, bodyB.y, bodyA.x, bodyA.y)
            pop()
        }
    }
}
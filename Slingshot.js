class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image = loadImage("sprites/sling1.png");
        this.image1 = loadImage("sprites/sling2.png");
        this.image2 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image,205,20);
        image(this.image1,175,22);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
            stroke("#301608");
            line(pointA.x - 20, pointA.y - 1, pointB.x - 20, pointB.y - 1);
            line(pointA.x + 15, pointA.y + 1, pointB.x + 30, pointB.y + 1);
            image(this.image2,pointA.x - 27,pointB.y + 8)
        }
    }
    
}
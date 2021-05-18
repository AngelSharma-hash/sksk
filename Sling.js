class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.009,
            length: 5
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
   fly(){
    this.slingshot.bodyA=null;
   }
    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.slingshot.pointB;
            fill("white");
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}

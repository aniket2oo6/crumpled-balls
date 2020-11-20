class Dustbin {

    constructor(x,y,height,angle){

        var dustbin_options ={
            isStatic: false,
            restitution: 0.8,
            friction: 1.5,
            density: 1
        }

    this.body = Bodies.rectangle(x,y,50,height,angle,dustbin_options);
    this.width = 90;
    this.height = height;

    Matter.Body.setAngle(this.body,angle);
    World.add(world,this.body);

    }

    display(){

    var c = this.body.position;
    var d = this.body.angle; 

    push();

    translate(c.x,c.y);
    rotate(d);

    rectMode(CENTER);
    fill("yellow");
    rect(0,0,this.width,this.height);

    pop();

    }

}
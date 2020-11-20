class Ground {

    constructor(x,y,width,height){

    var ground_options ={
        isStatic: true
    }    

    this.body = Bodies.rectangle(x,y,width,height,ground_options);
    this.width = width;
    this.height = height;

    World.add(world,this.body);

    }

    display(){

    var b = this.body.position;

    rectMode(CENTER);
    fill("brown");
    rect(b.x,b.y,this.width,this.height);

    }

}
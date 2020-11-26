

class Div {
    constructor(x,y,width, height){
    var dividerOptions = {
        isStatic:true
    }; 
    this.body = Bodies.rectangle(x,y,width,height, dividerOptions); 
    this.height = height;
    this.width = width;
    World.add(world, this.body);
    }
    
    display(){  
    var divPos = this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(divPos.x, divPos.y, this.width, this.height);
    }
    
}

  class Paper  {
    constructor(x,y,)   {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.8,
            friction: 0.5,
        }
        this.body = Bodies.circle(x,y,22.5,options);
    
        this.image = loadImage('paper.png');
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,70,70);
            pop();
        }

}

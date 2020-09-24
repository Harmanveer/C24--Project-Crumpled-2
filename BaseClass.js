class BaseClass
{
    constructor(x, y,width,height,angle) 
  {
    var options = 
      {
          isStatic:true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }

    this.body = Bodies.rectamgle(x, y, 10, 10, options);
    this.width = 10;
    this.height = 10;

    World.add(world, this.body);
  }
  
  display()
  {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ImageMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    fill(255);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};

class Paper extends BaseClass
{
  constructor(x, y,width,height,angle) 
  {
    super(x,y,50,50,angle);
    this.image = loadImage("sprites/paper.png");
  }
  
  display()
  {
    super.display();
  }
};

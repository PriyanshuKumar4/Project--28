class Paper {
  constructor(x,y,radius) {
      var options = {
          isStatic: false,
          'restitution': 0.3,
          'friction':0.5,
          'density':1.2
      }
      
      this.body = Bodies.circle(x,y,500, 500, radius, options);
      this.radius = radius

      World.add(world, this.body);
  }
  display(){
      
      ellipseMode(RADIUS);

      fill("yellow");
//this.body.position.x=mouseX;
//this.body.position.y=mouseY;

      circle(this.body.position.x, this.body.position.y, this.radius);

  }       
};
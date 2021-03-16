class Log {
    constructor(x, y, width, langle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'angle': langle
      }
      this.body = Bodies.rectangle(x, y, width, 7, options);
      this.width = width;
      this.height = 7;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
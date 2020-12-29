class Ball {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.,
          'friction':1.0,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      circle(0, 0, this.radius*2);
    //   keyy();
      pop();
    }



  }
//   function keyy (){
//       if (keyCode === UP_ARROW){
//         Matter.Body.applyForce(this.body, this.body.position, {x:85,y:-85})
//       }
//   }

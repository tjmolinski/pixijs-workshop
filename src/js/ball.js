// Implement the Ball here using PIXI.Sprite

/*
// Use these functions to help create a pong ball that will
// handle just like the ball in the game Pong

// Handling all the moving logic and keeping the ball
// withing the vertical bounds of the screen
updateMovement() {
  this.position.x += this.hsp * this.spd;
  this.position.y += this.vsp * this.spd;

  if(this.position.y < this.halfHeight) {
    this.position.y = this.halfHeight;
    this.vsp *= -1;
  }

  if(this.position.y > 600-this.halfHeight) {
    this.position.y = 600-this.halfHeight;
    this.vsp *= -1;
  }
}

// Resolving the collision with the paddle and then changing our velocity
// dependant on which side of the paddle that was hit.
// Center of paddle causes a horizontal reflection
// Top of paddle causes a reflection towards the top of the screen
// Bottom of the paddles causes a reflection towards the bottom of the scren
reflect(paddle) {
  this.position.x = paddle.position.x - (paddle.halfWidth + this.halfWidth) * this.hsp;
  this.vsp = (this.position.y - paddle.position.y) / 40;

  if(Math.abs(this.hsp) < 6) {
    this.hsp *= -1.25;
  } else {
    this.hsp *= -1;
  }
}
*/

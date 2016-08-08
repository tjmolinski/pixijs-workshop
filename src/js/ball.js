export class Ball extends PIXI.Sprite {
  constructor(newX, newY, spriteResource) {
    super(spriteResource);

    this.anchor = {
      x: 0.5,
      y: 0.5
    };

    this.position.x = newX;
    this.position.y = newY;
    this.centerPositionX = this.position.x;
    this.centerPositionY = this.position.y;

    this.hsp = -1;
    this.vsp = -1;
    this.speed = 2;
    this.spd = this.speed;

    this.halfWidth = this.width/2;
    this.halfHeight = this.height/2;
  }

  tick(time) {
    this.updateMovement();
  }

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

  // Resetting the ball to the center position with a new horizontal speed
  resetBall(newHsp) {
    this.position.x = this.centerPositionX;
    this.position.y = this.centerPositionY;
    this.spd = this.speed;
    this.hsp = newHsp;
  }

  // Resolving the collision with the paddle and then changing our velocity
  // dependant on which side of the paddle that was hit.
  // Center of paddle causes a horizontal reflection
  // Top of paddle causes a reflection towards the top of the screen
  // Bottom of the paddles causes a reflection towards the bottom of the scren
  reflect(paddle) {
    this.position.x = paddle.position.x - ((paddle.halfWidth + this.halfWidth) * this.hsp);
    this.vsp = (this.position.y - paddle.position.y) / 40;

    if(Math.abs(this.hsp) < 5) {
      this.spd *= 1.25;
    }
    this.hsp *= -1;
  }
}

/*

// Use this class to create a basic AI paddle
// that will play Pong with the user

import { Paddle } from './paddle';

export class AIPaddle extends Paddle {
  constructor(newX, newY, ball) {
    super(newX, newY);
    this.ball = ball;
    this.chaseSpeed = 0.045;
    this.limitSpeed = 3;
  }

  tick(time) {
    this.updateMovement();
  }

  // This method will spring our y position the ball's y position
  // There is an added clamp function to limit the paddle from
  // moving too quickly
  updateMovement() {
    let diff = (this.ball.position.y - this.position.y) * this.chaseSpeed;
    let clampedSpeed = Math.max(Math.min(this.limitSpeed, diff), -this.limitSpeed);
    this.position.y += clampedSpeed;
  }
}

*/

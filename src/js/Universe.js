import { Paddle } from './paddle';
import { AIPaddle } from './ai_paddle';
import { Ball } from './ball';
import { ScoreText } from './score_text';

export class Universe {
  constructor(camera, stage, assets) {
    this.camera = camera;
    this.assets = assets;

    this.ball = new Ball(400, 300, assets.ted);

    this.paddle = new Paddle(16, 300);

    this.ai_paddle = new AIPaddle(784, 300, this.ball);

    this.scoreText = new ScoreText();

    stage.addChild(this.scoreText);
    stage.addChild(this.paddle);
    stage.addChild(this.ai_paddle);
    stage.addChild(this.ball);
  }

  tick(time) {
    this.camera.tick(time);
    this.ball.tick(time);
    this.paddle.tick(time);
    this.ai_paddle.tick(time);

    this.updateCollisions();
    this.updateScores();
  }

  updateCollisions() {
    if(this.checkCollision(this.ball, this.paddle)) {
      this.reflectBall(this.paddle);
    }

    if(this.checkCollision(this.ball, this.ai_paddle)) {
      this.reflectBall(this.ai_paddle);
    }
  }

  // Checking to see if the ball went off the left or right side
  // of the screen, giving a player a point and resetting the ball
  updateScores() {
    if(this.ball.position.x < -this.ball.halfWidth) {
      this.ball.resetBall(1);
      this.scoreText.playerScored(1);
      this.assets.scoreSound.play();
    }

    if(this.ball.position.x > 800+this.ball.halfWidth) {
      this.ball.resetBall(-1);
      this.scoreText.playerScored(0);
      this.assets.scoreSound.play();
    }
  }

  // This method resolves the collision/overlap
  // between the ball and any paddle object
  reflectBall(paddle) {
    this.camera.shakeCamera(8, 5);
    this.assets.hitSound.play();
    this.ball.reflect(paddle);
  }

  // Basic collision check that uses the AABB(Axis Aligned Bounding Box)
  // method to see if two objects are overlapping
  checkCollision(obj1, obj2) {
    return obj1.position.x-obj1.halfWidth < obj2.position.x+obj2.halfWidth &&
           obj1.position.x+obj1.halfWidth > obj2.position.x-obj2.halfWidth &&
           obj1.position.y+obj1.halfHeight > obj2.position.y-obj2.halfHeight &&
           obj1.position.y-obj1.halfHeight < obj2.position.y+obj2.halfHeight;
  }
}

import { Key } from './Key';

export class Paddle extends PIXI.Graphics {
  constructor(newX, newY) {
    super();

    this.halfWidth = 16;
    this.halfHeight = 48;
    this.beginFill(0x00ff00);
    this.drawRect(-this.halfWidth, -this.halfHeight, this.halfWidth*2, this.halfHeight*2);
    this.endFill();

    this.position = {
      x: newX, y: newY
    };
  }

  tick(time) {
    this.updateInput();
  }

  updateInput() {
    if(Key.isDown(Key.UP)) {
      this.position.y -= 5;
    }
    if(Key.isDown(Key.DOWN)) {
      this.position.y += 5;
    }
  }
}

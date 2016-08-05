export class Camera extends PIXI.Container {
  constructor() {
    super();
    this.shaking = false;
    this.shakingBuffer = 0;
    this.shakingLength = 10;
    this.shakingAmount = 0;
    this.doubleShakeAmount = 0;

    this.startShakePosition = {
      x: 0,
      y: 0
    };
  }

  tick(time) {
    if(this.shaking) {
      if(this.shakingBuffer < this.shakingLength) {
        let xShake = (Math.random() * this.doubleShakeAmount) - this.shakingAmount;
        let yShake = (Math.random() * this.doubleShakeAmount) - this.shakingAmount;
        this.position.x = this.startShakePosition.x + xShake;
        this.position.y = this.startShakePosition.y + yShake;
        this.shakingBuffer++;
      } else {
        this.position.x = this.startShakePosition.x;
        this.position.y = this.startShakePosition.y;
        this.shakingDistance = { x: 0, y: 0 };
        this.shaking = false;
      }
    }
  }

  shakeCamera(strength, length) {
    if(!this.shaking) {
      this.startShakePosition = {
        x: this.position.x,
        y: this.position.y
      };
    }
    this.shaking = true;
    this.shakingBuffer = 0;
    this.shakingAmount = strength;
    this.shakingLength = length;
    this.doubleShakeAmount = strength*2;
  }
}

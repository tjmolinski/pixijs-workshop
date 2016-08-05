export class LoadingItem extends PIXI.Graphics {
  constructor(stage, renderer) {
    super();
    this.stage = stage;
    this._width = 50;
    this._height = 25;
    this._halfWidth = this._width/2;
    this._halfHeight = this._height/2;

    this.speed = Math.random();
    this.padding = 50;

    this.alpha = 0.5;
    this.red = Math.floor(Math.random() * 256).toString(16);
    this.green = Math.floor(Math.random() * 256).toString(16);
    this.blue = Math.floor(Math.random() * 256).toString(16);
    this.beginFill('0x'+this.red+this.green+this.blue);
    this.drawRect(this.x-this._halfWidth, this.y-this._halfHeight,
                  this._width, this._height);
    this.endFill();
    stage.addChild(this);

    this.x = this.padding + (Math.random() * (renderer.width-(this.padding*2)));
    this.y = this.padding + (Math.random() * (renderer.height-(this.padding*2)));
  }

  tick() {
    this.rotation += this.speed;
  }

  finish() {
    this.stage.removeChild(this);
  }
}

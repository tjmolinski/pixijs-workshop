export class ScoreText extends PIXI.Text {
  constructor() {
    super('', { font: '32px arial', fill: '#ffffff'});
    this.position.x = 400 - (this.width/2);
    this.position.y = 10;
    this.scores = [0, 0];
    this.updateScore();
  }

  updateScore() {
    this.text = this.scores[0] + ' : ' + this.scores[1];
    this.position.x = 400 - (this.width/2);
  }

  playerScored(idx) {
    this.scores[idx] += 1;
    this.updateScore();
  }
}

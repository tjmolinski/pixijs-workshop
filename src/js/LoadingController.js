import { LoadingItem } from './LoadingItem';

export class LoadingController {
  constructor(camera, stage, renderer) {
    this.stage = stage;
    this.items = [];
    this.itemCount = 100;
    for(let i = 0; i < this.itemCount; i++) {
      this.items.push(new LoadingItem(this.stage, renderer));
    }
  }

  tick(time) {
    for(let i = 0; i < this.items.length; i++) {
      this.items[i].tick(time);
    }
  }

  finish() {
    for(let i = 0; i < this.items.length; i++) {
      this.items[i].finish();
    }
  }
}

export class Universe {
  constructor(camera, stage, assets) {
    this.camera = camera;
    this.assets = assets;
  }

  tick(time) {
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

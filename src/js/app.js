import 'pixi.js';
import { Camera } from './Camera';
import { LoadingController } from './LoadingController';
import { MyAssetLoader } from './MyAssetLoader';
import { Universe } from './Universe';
import { Key } from './Key';

window.onload = () => {
  let renderer = new PIXI.WebGLRenderer(800, 600);
  // let renderer = new PIXI.CanvasRenderer(800, 600);
  // let renderer = new PIXI.autoDetectRenderer(800, 600);

  // The renderer will create a canvas element for you that you can then insert into the DOM.
  document.body.appendChild(renderer.view);

  // You need to create a root container that will hold the scene you want to draw.
  let stage = new PIXI.Container();
  let camera = new Camera();
  camera.addChild(stage);

  let ticker = PIXI.ticker.shared;
  ticker.autoStart = false;
  ticker.stop();
  ticker.start();

  let loadingController = new LoadingController(camera, stage, renderer);
  ticker.add(animate);
  ticker.add(loadingController.tick, loadingController);
  let loader = new MyAssetLoader((assets) => {
    loadingController.finish();
    ticker.remove(loadingController.tick, loadingController);

    let universeController = new Universe(camera, stage, assets);
    ticker.add(universeController.tick, universeController);
  }, stage);

  function animate() {
    renderer.render(camera);
  }

  window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
  window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);
};

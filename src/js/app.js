import 'pixi.js';
import { Key } from './Key';

window.onload = () => {
  // Step 1: Create a renderer
  // Step 2: Attach the renderer to the document

  // Step 3: Create a stage
  // Step 4: Setup up controllers

  // Step 5: Setup ticker
  // Step 6: Animate / render function

  window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
  window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);
};

import 'howler';

export class MyAssetLoader {
  constructor(finished) {
    let assets = {
      // Sounds made using http://www.bfxr.net/
      hitSound: new Howl({
          src: ['hit.ogg', 'hit.wav'],
          autoplay: false,
        })
      ,
      scoreSound: new Howl({
          src: ['score.ogg', 'score.wav'],
          autoplay: false,
        })
      ,
      andrew: null,
      brad: null,
      brandon: null,
      luke: null,
      ryan: null,
      ted: null
    };

    PIXI.loader
      .add('andrew', 'andrew.png')
      .add('brad', 'brad.png')
      .add('brandon', 'brandon.png')
      .add('luke', 'luke.png')
      .add('ryan', 'ryan.png')
      .add('ted', 'ted.png')
      .once('complete', (loader, resources) => {
        assets.andrew = resources.andrew.texture;
        assets.brad = resources.brad.texture;
        assets.brandon = resources.brandon.texture;
        assets.luke = resources.luke.texture;
        assets.ryan = resources.ryan.texture;
        assets.ted = resources.ted.texture;
        finished(assets);
      })
      .load();
  }
}

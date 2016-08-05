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

    // Implement the PIXI.loader here
  }
}

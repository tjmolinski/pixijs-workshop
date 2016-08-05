export var Key = {
  _pressed: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  ENTER: 13,
  SPACE: 32,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  Z: 90,
  Y: 89,
  X: 88,
  W: 87,
  V: 86,
  U: 85,
  T: 84,
  S: 83,
  R: 82,
  Q: 81,
  P: 80,
  O: 79,
  N: 78,
  M: 77,
  L: 76,
  K: 75,
  J: 74,
  I: 73,
  H: 72,
  G: 71,
  F: 70,
  E: 69,
  D: 68,
  C: 67,
  B: 66,
  A: 65,

  isDown: function(keyCode) {
    return this._pressed[keyCode] === 'press' || this._pressed[keyCode] === 'down';
  },

  isUp: function(keyCode) {
    return this._pressed[keyCode] === 'release' || this._pressed[keyCode] === 'up' || this._pressed[keyCode] === undefined;
  },

  isPressed: function(keyCode) {
    let val = this._pressed[keyCode];
    if(this._pressed[keyCode] === 'press') {
      this._pressed[keyCode] = 'down';
    }
    return val === 'press';
  },

  isReleased: function(keyCode) {
    let val = this._pressed[keyCode];
    if(this._pressed[keyCode] === 'release') {
      this._pressed[keyCode] = 'up';
    }
    return val === 'release';
  },

  onKeydown: function(event) {
    event.preventDefault();
    event.stopPropagation();
    if(this._pressed[event.keyCode] === 'up' || this._pressed[event.keyCode] === 'release' || this._pressed[event.keyCode] === undefined) {
      this._pressed[event.keyCode] = 'press';
    }
  },

  onKeyup: function(event) {
    event.preventDefault();
    event.stopPropagation();
    if(this._pressed[event.keyCode] === 'down' || this._pressed[event.keyCode] === 'press' || this._pressed[event.keyCode] === undefined) {
      this._pressed[event.keyCode] = 'release';
    }
  }
};

export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && typeof this.evacuationWarningMesagge !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter and setter for sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}

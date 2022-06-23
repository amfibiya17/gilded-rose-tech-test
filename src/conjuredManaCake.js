const Item = require('./item');

class ConjuredManaCake extends Item {
  constructor(sellIn, quality) {
    super('Conjured Mana Cake', sellIn, quality);
  }

  update() {
    this.sellIn -= 1;

    if (this.sellIn > 0) {
      this.quality -= 2;
      return;
    }

    this.quality -= 4;
  }
}

module.exports = ConjuredManaCake;

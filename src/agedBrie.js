const Item = require('./item');

class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality);
  }

  update() {
    this.sellIn -= 1;

    if (this.sellIn > 0) {
      this.quality += 1;
    } else {
      this.quality += 2;
    }

    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}

module.exports = AgedBrie;

const Item = require('./item');

class BackstagePasses extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
  }

  checkIn() {
    if (this.sellIn > 10) {
      return (this.quality += 1);
    }

    if (this.sellIn <= 10 && this.sellIn > 5) {
      return (this.quality += 2);
    }

    if (this.sellIn <= 5 && this.sellIn > -1) {
      return (this.quality += 3);
    }

    return (this.quality = 0);
  }

  update() {
    this.sellIn -= 1;
    this.quality = Math.min(50, this.checkIn());
  }
}

module.exports = BackstagePasses;

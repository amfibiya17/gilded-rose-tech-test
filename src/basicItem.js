const Item = require('./item');

class BasicItem extends Item {
  update() {
    this.sellIn -= 1;

    if (this.sellIn > 0) {
      this.quality -= 1;
      return;
    }

    this.quality -= 2;
  }
}

module.exports = BasicItem;

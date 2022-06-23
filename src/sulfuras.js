const Item = require('./item');

class Sulfuras extends Item {
  constructor() {
    super('Sulfuras, Hand of Ragnaros', 0, 80);
  }

  update() {
    return this.sellIn;
  }
}

module.exports = Sulfuras;

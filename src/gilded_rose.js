class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => console.log(item) || item.update());
    return this.items;
  }
}

module.exports = Shop;

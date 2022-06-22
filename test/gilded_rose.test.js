const { Shop, Item } = require('../src/gilded_rose');

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new Shop([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  describe('class Item', () => {
    let item;

    beforeEach(() => {
      item = new Item('banana', 1, 0);
    });

    it('has a name instance property after initializing the class', () => {
      expect(item.name).toEqual('banana');
    });
  });
});

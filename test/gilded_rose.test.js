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

    it('has a sellIn instance property after initializing the class', () => {
      expect(item.sellIn).toEqual(1);
    });

    it('has a quality instance property after initializing the class', () => {
      expect(item.quality).toEqual(0);
    });
  });

  describe('class Shop', () => {
    let shop;

    beforeEach(() => {
      shop = new Shop([new Item('banana', 1, 0)]);
    });

    it('has items instance property after initializing the class', () => {
      expect(shop.items).toEqual([new Item('banana', 1, 0)]);
    });

    describe('updateQuality function', () => {
      it('should not have negative quality', () => {
        shop.updateQuality();
        expect(shop.items[0].quality).toBeGreaterThanOrEqual(0);
      });
    });
  });
});

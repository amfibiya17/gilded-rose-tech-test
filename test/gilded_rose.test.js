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
      item = new Item('banana', 5, 5);
    });

    it('has a name instance property after initializing the class', () => {
      expect(item.name).toEqual('banana');
    });

    it('has a sellIn instance property after initializing the class', () => {
      expect(item.sellIn).toEqual(5);
    });

    it('has a quality instance property after initializing the class', () => {
      expect(item.quality).toEqual(5);
    });
  });

  describe('class Shop', () => {
    it('has items instance property after initializing the class', () => {
      const shop = new Shop([new Item('banana', 5, 5)]);
      expect(shop.items).toEqual([new Item('banana', 5, 5)]);
    });

    describe('updateQuality function', () => {
      it('should not have negative quality', () => {
        const shop = new Shop([new Item('banana', 5, 5)]);
        shop.updateQuality();
        expect(shop.items[0].quality).toBeGreaterThanOrEqual(0);
      });

      it('should not have quality greater than 50', () => {
        const shop = new Shop([new Item('banana', 5, 50)]);
        shop.updateQuality();
        expect(shop.items[0].quality).toBeLessThanOrEqual(50);
      });
    });
  });
});

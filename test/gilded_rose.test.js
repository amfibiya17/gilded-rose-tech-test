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
      const item = { name: 'banana', sellIn: 5, quality: 5 };
      const shop = new Shop([item]);
      expect(shop.items).toEqual([new Item('banana', 5, 5)]);
    });

    describe('updateQuality with quality limitation', () => {
      it('should not have negative quality', () => {
        const item = { name: 'banana', sellIn: 5, quality: 5 };
        const shop = new Shop([item]);
        shop.updateQuality();
        expect(shop.items[0].quality).toBeGreaterThanOrEqual(0);
      });

      it('should not have quality greater than 50', () => {
        const item = { name: 'banana', sellIn: 5, quality: 5 };
        const shop = new Shop([item]);
        shop.updateQuality();
        expect(shop.items[0].quality).toBeLessThanOrEqual(50);
      });
    });

    describe('updateQuality with standard items', () => {
      let item;
      let shop;

      beforeEach(() => {
        item = { name: 'banana', sellIn: 5, quality: 5 };
        shop = new Shop([item]);
      });

      it('should have an item in the shop', () => {
        expect(shop.items[0]).toEqual({
          name: 'banana',
          sellIn: 5,
          quality: 5,
        });
      });

      it('should update quality decreasing by one', () => {
        shop.updateQuality();
        expect(shop.items[0].quality).toEqual(4);
      });
    });
  });
});

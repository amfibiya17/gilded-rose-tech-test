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
      const shop = new Shop([{ name: 'banana', sellIn: 5, quality: 5 }]);

      expect(shop.items).toEqual([new Item('banana', 5, 5)]);
    });

    describe('updateQuality with quality limitation', () => {
      it('should not have negative quality', () => {
        const shop = new Shop([{ name: 'banana', sellIn: 5, quality: 0 }]);

        shop.updateQuality();
        expect(shop.items[0].quality).toBeGreaterThanOrEqual(0);
      });

      it('should not have quality greater than 50', () => {
        const shop = new Shop([{ name: 'banana', sellIn: 5, quality: 50 }]);
        shop.updateQuality();

        expect(shop.items[0].quality).toBeLessThanOrEqual(50);
      });
    });

    describe('updateQuality with standard items', () => {
      it('should have an item in the shop', () => {
        const shop = new Shop([{ name: 'banana', sellIn: 5, quality: 5 }]);

        expect(shop.items[0]).toEqual({
          name: 'banana',
          sellIn: 5,
          quality: 5,
        });
      });

      it('should update quality decreasing by 1', () => {
        const shop = new Shop([{ name: 'banana', sellIn: 5, quality: 5 }]);

        shop.updateQuality();
        expect(shop.items[0].quality).toEqual(4);
      });

      it('should update sellIn decreasing by 1', () => {
        const shop = new Shop([{ name: 'banana', sellIn: 5, quality: 5 }]);

        shop.updateQuality();
        expect(shop.items[0].sellIn).toEqual(4);
      });

      it('should update quality decreasing by two if sellIn = 0', () => {
        const shop = new Shop([{ name: 'banana', sellIn: 0, quality: 5 }]);
        shop.updateQuality();

        expect(shop.items[0].quality).toEqual(3);
      });
    });

    describe('Sulfuras, Hand of Ragnaros', () => {
      it('should not update the quality and sellIn of Sulfuras, Hand of Ragnaros', () => {
        const shop = new Shop([
          { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
        ]);
        shop.updateQuality();

        expect(shop.items[0].quality).toEqual(80);
        expect(shop.items[0].sellIn).toEqual(0);
      });
    });
  });
});

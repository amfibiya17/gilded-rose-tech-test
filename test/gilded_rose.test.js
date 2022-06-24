const Shop = require('../src/gilded_rose');
const Item = require('../src/item');
const ConjuredManaCake = require('../src/conjuredManaCake');

describe('Gilded Rose', () => {
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

  describe('updateQuality function', () => {
    it('checks that update function has been called', () => {
      const item = new ConjuredManaCake(3, 6);
      const itemSpy = jest.spyOn(item, 'update');
      const gildedRose = new Shop([item]);
      gildedRose.updateQuality();
      expect(itemSpy).toBeCalled();
    });
  });

  // describe('class Shop', () => {
  //   it('has items instance property after initializing the class', () => {
  //     const items = [];
  //     const gildedRose = new Shop(items);

  //     expect(gildedRose.items).toEqual([]);
  //   });

  //   describe('updateQuality with quality limitation', () => {
  //     it('should not have negative quality', () => {
  //       const gildedRose = new Shop([
  //         { name: 'banana', sellIn: 5, quality: 1 },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(0);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(0);
  //     });

  //     it('should not have quality greater than 50', () => {
  //       const gildedRose = new Shop([
  //         { name: 'banana', sellIn: 5, quality: 50 },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(49);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(48);
  //     });
  //   });

  //   describe('updateQuality with standard items', () => {
  //     it('should have an item in the shop', () => {
  //       const gildedRose = new Shop([
  //         { name: 'banana', sellIn: 5, quality: 5 },
  //       ]);

  //       expect(gildedRose.items[0]).toEqual({
  //         name: 'banana',
  //         sellIn: 5,
  //         quality: 5,
  //       });
  //     });

  //     it('should update quality decreasing by 1', () => {
  //       const gildedRose = new Shop([
  //         { name: 'banana', sellIn: 5, quality: 5 },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(4);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(3);
  //     });

  //     it('should update sellIn decreasing by 1', () => {
  //       const gildedRose = new Shop([
  //         { name: 'banana', sellIn: 5, quality: 5 },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].sellIn).toEqual(4);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].sellIn).toEqual(3);
  //     });

  //     it('should update quality decreasing by two if sellIn = 0', () => {
  //       const gildedRose = new Shop([
  //         { name: 'banana', sellIn: 0, quality: 5 },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(3);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(1);
  //     });
  //   });

  //   describe('Sulfuras, Hand of Ragnaros', () => {
  //     it('should not update quality', () => {
  //       const gildedRose = new Shop([
  //         { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(80);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(80);
  //     });

  //     it('should not update sellIn', () => {
  //       const gildedRose = new Shop([
  //         { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].sellIn).toEqual(0);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].sellIn).toEqual(0);
  //     });
  //   });

  //   describe('Aged Brie', () => {
  //     it('should update quality increasing by 1', () => {
  //       const gildedRose = new Shop([
  //         { name: 'Aged Brie', sellIn: 2, quality: 0 },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(1);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(2);
  //     });

  //     it('should update sellIn decreasing by 1', () => {
  //       const gildedRose = new Shop([
  //         { name: 'Aged Brie', sellIn: 2, quality: 0 },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].sellIn).toEqual(1);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].sellIn).toEqual(0);
  //     });

  //     it('should increase quality by 2 for each day if sellIn < 0', () => {
  //       const gildedRose = new Shop([
  //         { name: 'Aged Brie', sellIn: 1, quality: 1 },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(2);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(4);
  //     });

  //     it('should decrease sellIn by 1 for each day if sellIn < 0', () => {
  //       const gildedRose = new Shop([
  //         { name: 'Aged Brie', sellIn: 1, quality: 1 },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].sellIn).toEqual(0);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].sellIn).toEqual(-1);
  //     });

  //     it('should not have quality greater than 50', () => {
  //       const gildedRose = new Shop([
  //         { name: 'Aged Brie', sellIn: 11, quality: 49 },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(50);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(50);
  //     });
  //   });

  //   describe('Backstage passes to a TAFKAL80ETC concert', () => {
  //     it('should increase quality by 1 when the sellIn > 10', () => {
  //       const gildedRose = new Shop([
  //         {
  //           name: 'Backstage passes to a TAFKAL80ETC concert',
  //           sellIn: 15,
  //           quality: 20,
  //         },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(21);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(22);
  //     });

  //     it('should decrease sellIn by 1 when the sellIn > 10', () => {
  //       const gildedRose = new Shop([
  //         {
  //           name: 'Backstage passes to a TAFKAL80ETC concert',
  //           sellIn: 15,
  //           quality: 20,
  //         },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].sellIn).toEqual(14);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].sellIn).toEqual(13);
  //     });

  //     it('should increase quality by 2 when 5 < sellIn <= 10', () => {
  //       const gildedRose = new Shop([
  //         {
  //           name: 'Backstage passes to a TAFKAL80ETC concert',
  //           sellIn: 9,
  //           quality: 20,
  //         },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(22);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(24);
  //     });

  //     it('should increase quality by 3 when sellIn <= 5', () => {
  //       const gildedRose = new Shop([
  //         {
  //           name: 'Backstage passes to a TAFKAL80ETC concert',
  //           sellIn: 5,
  //           quality: 20,
  //         },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(23);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(26);
  //     });

  //     it('should drop quality to 0 when sellIn < 0', () => {
  //       const gildedRose = new Shop([
  //         {
  //           name: 'Backstage passes to a TAFKAL80ETC concert',
  //           sellIn: 0,
  //           quality: 20,
  //         },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(0);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(0);
  //     });

  //     it('should not have quality greater than 50', () => {
  //       const gildedRose = new Shop([
  //         {
  //           name: 'Backstage passes to a TAFKAL80ETC concert',
  //           sellIn: 5,
  //           quality: 49,
  //         },
  //       ]);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(50);

  //       gildedRose.updateQuality();
  //       expect(gildedRose.items[0].quality).toEqual(50);
  //     });
  //   });
  // });
});

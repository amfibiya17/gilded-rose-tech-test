const Shop = require('../src/gilded_rose');
const ConjuredManaCake = require('../src/conjuredManaCake');

describe('Gilded Rose', () => {
  describe('class Shop', () => {
    it('has items instance property after initializing the class', () => {
      const gildedRose = new Shop();
      expect(gildedRose.items).toEqual([]);
    });

    describe('updateQuality function', () => {
      it('checks that update function has been called', () => {
        const item = new ConjuredManaCake(3, 6);
        const itemSpy = jest.spyOn(item, 'update');
        const gildedRose = new Shop([item]);
        gildedRose.updateQuality();
        expect(itemSpy).toBeCalled();
      });

      it('checks that update function has been called for 2 items', () => {
        const item1 = new ConjuredManaCake(3, 6);
        const item2 = new ConjuredManaCake(3, 6);

        const itemSpy1 = jest.spyOn(item1, 'update');
        const itemSpy2 = jest.spyOn(item2, 'update');

        const gildedRose = new Shop([item1, item2]);

        gildedRose.updateQuality();

        expect(itemSpy1).toBeCalled();
        expect(itemSpy2).toBeCalled();
      });
    });
  });
});

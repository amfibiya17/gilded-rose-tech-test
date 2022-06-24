const ConjuredManaCake = require('../src/conjuredManaCake');

describe('Conjured Mana Cake', () => {
  describe('instance properties ', () => {
    let cake;

    beforeEach(() => {
      cake = new ConjuredManaCake(3, 6);
    });

    it('has a name instance property after initializing the class', () => {
      expect(cake.name).toEqual('Conjured Mana Cake');
    });
    it('has a sellIn instance property after initializing the class', () => {
      expect(cake.sellIn).toEqual(3);
    });
    it('has a quality instance property after initializing the class', () => {
      expect(cake.quality).toEqual(6);
    });
  });

  describe('update function', () => {
    it('should update sellIn decreasing by 1', () => {
      const cake = new ConjuredManaCake(3, 6);
      cake.update();
      expect(cake.sellIn).toEqual(2);
    });

    it('should update quality decreasing by 2', () => {
      const cake = new ConjuredManaCake(3, 6);
      cake.update();
      expect(cake.quality).toEqual(4);
    });

    it('should update quality decreasing by 4 after sellIn <= 0', () => {
      const cake = new ConjuredManaCake(0, 9);
      cake.update();
      expect(cake.sellIn).toEqual(-1);
      expect(cake.quality).toEqual(5);
    });
  });
});

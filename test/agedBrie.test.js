const AgedBrie = require('../src/agedBrie');

describe('Aged Brie', () => {
  describe('instance properties ', () => {
    let brie;

    beforeEach(() => {
      brie = new AgedBrie(2, 0);
    });

    it('has a name instance property after initializing the class', () => {
      expect(brie.name).toEqual('Aged Brie');
    });
    it('has a sellIn instance property after initializing the class', () => {
      expect(brie.sellIn).toEqual(2);
    });
    it('has a quality instance property after initializing the class', () => {
      expect(brie.quality).toEqual(0);
    });
  });

  describe('update when sellIn = 2 and quality = 0', () => {
    let brie;

    beforeEach(() => {
      brie = new AgedBrie(2, 0);
    });

    it('should update quality increasing by 1', () => {
      brie.update();
      expect(brie.quality).toEqual(1);
    });

    it('should update sellIn decreasing by 1', () => {
      brie.update();
      expect(brie.sellIn).toEqual(1);
    });
  });

  describe('update when sellIn = -1 and quality = 1', () => {
    let brie;

    beforeEach(() => {
      brie = new AgedBrie(-1, 1);
    });

    it('should increase quality by 2 for each day if sellIn < 0', () => {
      brie.update();
      expect(brie.quality).toEqual(3);
    });

    it('should decrease sellIn by 1 for each day if sellIn < 0', () => {
      brie.update();
      expect(brie.sellIn).toEqual(-2);
    });
  });

  describe('update when quality <= 50', () => {
    it('should not have quality greater than 50', () => {
      const brie = new AgedBrie(-1, 50);
      brie.update();
      expect(brie.quality).toEqual(50);
    });

    it('should not have quality greater than 50', () => {
      const brie = new AgedBrie(3, 50);
      brie.update();
      expect(brie.quality).toEqual(50);
    });
  });
});

const BackstagePasses = require('../src/backstagePasses');

describe('Backstage passes', () => {
  describe('instance properties ', () => {
    let backstagePasses;

    beforeEach(() => {
      backstagePasses = new BackstagePasses(15, 20);
    });

    it('has a name instance property after initializing the class', () => {
      expect(backstagePasses.name).toEqual(
        'Backstage passes to a TAFKAL80ETC concert'
      );
    });
    it('has a sellIn instance property after initializing the class', () => {
      expect(backstagePasses.sellIn).toEqual(15);
    });
    it('has a quality instance property after initializing the class', () => {
      expect(backstagePasses.quality).toEqual(20);
    });
  });

  describe('update when sellIn = 15 and quality = 20', () => {
    let backstagePasses;

    beforeEach(() => {
      backstagePasses = new BackstagePasses(15, 20);
    });

    it('should increase quality by 1 when the sellIn > 10', () => {
      backstagePasses.update();
      expect(backstagePasses.quality).toEqual(21);
    });

    it('should decrease sellIn by 1 when the sellIn > 10', () => {
      backstagePasses.update();
      expect(backstagePasses.sellIn).toEqual(14);
    });
  });

  describe('update when 5 < sellIn <= 10', () => {
    it('should increase quality by 2 when 5 < sellIn <= 10', () => {
      const backstagePasses = new BackstagePasses(9, 20);
      backstagePasses.update();
      expect(backstagePasses.quality).toEqual(22);
    });
  });

  describe('update when sellIn <= 5', () => {
    it('should increase quality by 3 when sellIn <= 5', () => {
      const backstagePasses = new BackstagePasses(5, 20);
      backstagePasses.update();
      expect(backstagePasses.quality).toEqual(23);
    });
  });

  describe('update when sellIn < 0', () => {
    it('should drop quality to 0 when sellIn < 0', () => {
      const backstagePasses = new BackstagePasses(0, 20);
      backstagePasses.update();
      expect(backstagePasses.quality).toEqual(0);
    });
  });

  describe('should not update quality > 50 ', () => {
    it('should not have quality greater than 50', () => {
      const backstagePasses = new BackstagePasses(10, 50);
      backstagePasses.update();
      expect(backstagePasses.quality).toEqual(50);
    });
  });
});

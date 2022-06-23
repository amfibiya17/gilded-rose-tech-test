const Sulfuras = require('../src/sulfuras');

describe('Sulfuras', () => {
  describe('instance properties ', () => {
    let sulfuras;

    beforeEach(() => {
      sulfuras = new Sulfuras(0, 80);
    });

    it('has a name instance property after initializing the class', () => {
      expect(sulfuras.name).toEqual('Sulfuras, Hand of Ragnaros');
    });
    it('has a sellIn instance property after initializing the class', () => {
      expect(sulfuras.sellIn).toEqual(0);
    });
    it('has a quality instance property after initializing the class', () => {
      expect(sulfuras.quality).toEqual(80);
    });
  });

  describe('Sulfuras, Hand of Ragnaros', () => {
    let sulfuras;

    beforeEach(() => {
      sulfuras = new Sulfuras(0, 80);
    });

    it('should not update quality', () => {
      sulfuras.update();
      expect(sulfuras.quality).toEqual(80);
    });

    it('should not update sellIn', () => {
      sulfuras.update();
      expect(sulfuras.sellIn).toEqual(0);
    });
  });
});

const Item = require('../src/item');

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

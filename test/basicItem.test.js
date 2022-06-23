const BasicItem = require('../src/basicItem');

describe('Basic Item', () => {
  it('should update quality decreasing by 1', () => {
    const item = new BasicItem('Banana', 5, 5);
    item.update();
    expect(item.quality).toEqual(4);
  });

  it('should update sellIn decreasing by 1', () => {
    const item = new BasicItem('Banana', 5, 5);
    item.update();
    expect(item.sellIn).toEqual(4);
  });

  it('should update quality decreasing by two if sellIn <= 0', () => {
    const item = new BasicItem('Banana', 0, 5);
    item.update();
    expect(item.quality).toEqual(3);
  });
});

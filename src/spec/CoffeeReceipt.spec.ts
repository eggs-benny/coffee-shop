import Receipt from './../CoffeeReceipt';

describe('Reciept', () => {
  test('should return the shop name from the json file', () => {
    const receipt = new Receipt();

    expect(receipt.getShopName()).toEqual('The Coffee Connection');
  });
});

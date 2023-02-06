import Receipt from './../CoffeeReceipt';
//import ShopData from './exampleCoffeeInfo.json';

const expectedShopData = [
  {
    shopName: 'The Coffee Connection',
    address: '123 Lakeside Way',
    phone: '16503600708',
    prices: [
      {
        'Cafe Latte': 4.75,
        'Flat White': 4.75,
        'Cappucino': 3.85,
        'Single Espresso': 2.05,
        'Double Espresso': 3.75,
        'Americano': 3.75,
        'Cortado': 4.55,
        'Tea': 3.65,
        'Choc Mudcake': 6.4,
        'Choc Mousse': 8.2,
        'Affogato': 14.8,
        'Tiramisu': 11.4,
        'Blueberry Muffin': 4.05,
        'Chocolate Chip Muffin': 4.05,
        'Muffin Of The Day': 4.55
      }
    ]
  }
];

// jest.mock(
//   '../exampleCoffeeInfo.json',
//   () => [
//     {
//       shopName: 'The Coffee Connection',
//       address: '123 Lakeside Way',
//       phone: '16503600708',
//       prices: [
//         {
//           'Cafe Latte': 4.75,
//           'Flat White': 4.75,
//           'Cappucino': 3.85,
//           'Single Espresso': 2.05,
//           'Double Espresso': 3.75,
//           'Americano': 3.75,
//           'Cortado': 4.55,
//           'Tea': 3.65,
//           'Choc Mudcake': 6.4,
//           'Choc Mousse': 8.2,
//           'Affogato': 14.8,
//           'Tiramisu': 11.4,
//           'Blueberry Muffin': 4.05,
//           'Chocolate Chip Muffin': 4.05,
//           'Muffin Of The Day': 4.55
//         }
//       ]
//     }
//   ],
//   { virtual: true }
// );

describe('Reciept', () => {
  test('should return the shop name from the json file', () => {
    const receipt = new Receipt();

    expect(receipt.getShopName()).toEqual('The Coffee Connection');
  });

  test('should return data object from json file', () => {
    const receipt = new Receipt();

    expect(receipt.getJsonData()).toEqual(expectedShopData);
  });

  test('should return the address & phone from the json file', () => {
    const receipt = new Receipt();

    expect(receipt.getAddress()).toEqual('123 Lakeside Way');
    expect(receipt.getPhone()).toEqual('16503600708');
  });

  test('should return a formatted header', () => {
    const receipt = new Receipt();

    expect(receipt.getHeader()).toEqual('The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708');
  });

  test('should return an item`s price', () => {
    const receipt = new Receipt();

    expect(receipt.getItemPrice('Cafe Latte')).toEqual(4.75);
  });

});

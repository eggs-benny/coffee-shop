import shopData from './exampleCoffeeInfo.json';

export default class Receipt {
  getShopName(): string {
    const data: Array<any> = this.getJsonData()

    return data[0].shopName
  }

  getJsonData(): object[] {
    return shopData;
  }
}


// [
//   {
//     shopName: 'The Coffee Connection',
//     address: '123 Lakeside Way',
//     phone: '16503600708',
//     prices: [ [Object] ]
//   }
// ]
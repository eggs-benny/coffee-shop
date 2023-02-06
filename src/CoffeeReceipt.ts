export default class Receipt {
  shopData: any;
  constructor() {
    this.shopData = this.getJsonData()[0];
  }

  getJsonData(): object[] {
    const data = require('./exampleCoffeeInfo.json');
    return data;
  }

  getShopName(): string {
    return this.shopData.shopName;
  }

  getAddress(): string {
    return this.shopData.address;
  }

  getPhone(): string {
    return this.shopData.phone;
  }

  getHeader(): string {
    const shopName: string = this.getShopName();
    const address: string = this.getAddress();
    const phone: string = this.getPhone();

    return `${shopName}\n\n${address}\nPhone: +${phone[0]} (${phone.slice(1,4)}) ${phone.slice(4, 7)}-${phone.slice(7, 11)}`;
  }

  getItemPrice(itemName: string): string {
    const price = this.shopData.prices[0][`${itemName}`];
    return price;
  }
}

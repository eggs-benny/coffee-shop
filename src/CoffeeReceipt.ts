//import shopData from './exampleCoffeeInfo.json';

export default class Receipt {
  getJsonData(): object[] {
    const shopData = require('./exampleCoffeeInfo.json')

    return shopData
  }

  getShopName(): string {
    const data: Array<any> = this.getJsonData()
    return data[0].shopName
  }

  getAddress(): string {
    const data: Array<any> = this.getJsonData()
    return data[0].address
  }

  getPhone(): string {
    const data: Array<any> = this.getJsonData()
    return data[0].phone
  }

  getHeader(): string {
    const shopName: string = this.getShopName()
    const address: string = this.getAddress()
    const phone: string = this.getPhone()
  
    return `${shopName}\n\n${address}\nPhone: +${phone[0]} (${phone.slice(1,4)}) ${phone.slice(4,7)}-${phone.slice(7,11)}`
  }

  getItemPrice(itemName: string): string {
    const data: Array<any> = this.getJsonData()
    const prices = data[0].prices[0]
    const price = prices[`${itemName}`]
  
    return price
    
  }
}
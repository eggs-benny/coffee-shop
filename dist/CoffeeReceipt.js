"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exampleCoffeeInfo_json_1 = __importDefault(require("./exampleCoffeeInfo.json"));
class Receipt {
    getShopName() {
        const data = this.getJsonData();
        return data[0].shopName;
    }
    getJsonData() {
        return exampleCoffeeInfo_json_1.default;
    }
}
exports.default = Receipt;
// [
//   {
//     shopName: 'The Coffee Connection',
//     address: '123 Lakeside Way',
//     phone: '16503600708',
//     prices: [ [Object] ]
//   }
// ]
//# sourceMappingURL=CoffeeReceipt.js.map
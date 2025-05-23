function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let itemObj = currencyValues.find(item => item.currency === exchangeCurrency);
    return sumUAH / itemObj.value;
}
let result = exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD');
console.log(result);
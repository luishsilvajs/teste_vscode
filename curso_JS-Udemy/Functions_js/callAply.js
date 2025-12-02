function getPrice(tax = 0, currency = 'R$'){
    return `${currency} ${this.price * (1 - this.desc) * (1 + tax)}`
}

const product = {
    name: 'Macbook',
    price: 4990.94,
    desc: 0.15,
    getPrice
}
console.log(getPrice())
console.log(product.getPrice())

const car = {
    price: 49990,
    desc: 0.20
}
console.log(getPrice.call(car))
console.log(getPrice.apply(car))

console.log(getPrice.call(car, 0.17, '$'))
console.log(getPrice.apply(car, [0.17, '$']))
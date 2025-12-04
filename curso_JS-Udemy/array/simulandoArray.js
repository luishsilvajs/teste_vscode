const quaseArray = {
    0: 'Rafael',
    1: 'Luis',
    2: 'Mayara'
}

console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () {
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0])

const array = ['Rafael', 'Luis', 'Mayara']
console.log(quaseArray.toString(), array)
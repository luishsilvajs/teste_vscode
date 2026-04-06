function validaNum(value1, value2) {
    if (value1 >= value2) {
        return `Número 1 (${value1}) é maior ou igual ao número 2 (${value2})`
    } else {
        return `Número 1 (${value1}) não é maior ou igual ao número 2 (${value2})`
    }
}

console.log(validaNum(5, 5))
console.log(validaNum(5, 3))
console.log(validaNum(5, 10))
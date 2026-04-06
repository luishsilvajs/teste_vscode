function checkDivisor(value){
    let rest = value % 3

    if (rest != 0){
        return `O valor ${value}, não é divisível por 3`
    }

    let resultadoRest = rest
    let resultado = value / 3
    return {
        message: `O valor ${value} é divisível por 3`,
        restoOP: rest,
        resultado
    }
}

console.log(checkDivisor(3))
console.log(checkDivisor(5))
console.log(checkDivisor(7))
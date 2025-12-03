function calculadora(value1, operador, value2) {
    let resultado
    switch (operador) {
        case '+':
            resultado = value1 + value2
            break

        case '-':
            resultado = value1 - value2
            break

        case '/':
            resultado = value1 / value2
            break

        case '*':
            resultado = value1 * value2
            break
    }

    return resultado
}

console.log(calculadora(2, '*', 5))
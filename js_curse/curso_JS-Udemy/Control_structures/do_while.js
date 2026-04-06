function getInteiro(min, max) {
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor)
}

let option = -1

do {
    option = getInteiro(-1, 10)
    console.log(`O número encontrado é ${option}.`)
} while (option != -1)

console.log('Fim da execução')
function getInteiro(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let option = 0

while (option != -1) {
    option = getInteiro(-1, 100)
    console.log(`A opção retornada é ${option}.`)
}

console.log('Leitura finalizada')
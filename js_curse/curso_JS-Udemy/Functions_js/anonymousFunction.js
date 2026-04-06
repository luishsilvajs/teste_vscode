const soma = (x, y) => {
    return x + y
}

const imprimirResult = (a, b, operacao = soma) => {
    console.log(operacao(a, b))
}

imprimirResult(4, 6)
imprimirResult(4, 6, soma)
imprimirResult(25, 20, function(x, y){
    return x - y
})
imprimirResult(4, 6, (x, y) => x * y)

const pessoa = {
    falar: () => {
        console.log('Olá, tudo bem?')
    }
}

pessoa.falar()
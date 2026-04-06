// declaração literal
function func1() {
}

// armazenar em variável
const func2 = function () {
}

// armazenar em array
const array = [function (a, b) { return a + b }, func1, func2]

// armazenar em atributos e objetos
const obj = {}

obj.falar = function () {
    return 'Olá'
}
console.log(obj.falar())

// Função como parâmetro
function run(fun) {
    fun()
}

run(function () {
    console.log('Executando...')
})

// Funções pode retornar ou conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(5)
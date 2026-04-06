// Function tradicioal funcional
let dobro = function (a) {
    return 2 * a
}

// Arrow Function tradicional,  sempre é anônima
dobro = (a) => {
    return 2 * a
}

// Arrow function reduzida, quando é de uma única linha/expressão
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'                                           // Formato mais recomendado, boas práticas
ola = _ => 'Olá'

console.log(ola())
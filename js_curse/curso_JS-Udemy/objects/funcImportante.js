const pessoa = {
    nome: 'Luis',
    idade: 26,
    peso: 93
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNasc', {
    enumerable: true,
    writable: false,
    value: '29/10/1999'
})

console.log(pessoa)

// ES6 - 2015  Object.assign - Assina os atributos dentro de um único objeto
const dest = {
    a: 1
}
const obj1 = {
    b: 2
}
const obj2 = {
    c: 3
}

const obj = Object.assign( dest, obj1, obj2)
console.log(obj)
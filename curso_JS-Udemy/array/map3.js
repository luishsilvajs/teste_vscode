Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let index = 0; index < this.length; index++) {
       newArray.push(callback(this[index], index, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 19.90 }',
    '{ "nome": "Kit de lápis", "preco": 9.90 }',
    '{ "nome": "Caneta", "preco": 1.99 }'
]

let resultadoPreco = carrinho.map2(precos => JSON.parse(precos).preco)
console.log(resultadoPreco)
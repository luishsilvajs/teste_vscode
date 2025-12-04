const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 19.90 }',
    '{ "nome": "Kit de lápis", "preco": 9.90 }',
    '{ "nome": "Caneta", "preco": 1.99 }'
]

let resultadoPreco = carrinho.map(precos => JSON.parse(precos).preco)
console.log(resultadoPreco)
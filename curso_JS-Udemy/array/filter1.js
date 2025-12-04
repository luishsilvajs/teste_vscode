const produtos = [
    { nome: 'Macbook', preco: 3500, fragil: true },
    { nome: 'iPad', preco: 2500, fragil: true },
    { nome: 'Copo de vidro', preco: 10, fragil: true },
    { nome: 'Copo de plastico', preco: 7, fragil: false }
]

console.log(produtos.filter((p) => {
    return true
}))

const caro = (produto) => {
    return produto.preco >= 500
}

const fragil = (produto) => {
    return produto.fragil
}

console.log(produtos.filter(caro).filter(fragil))

const barato = (produto) =>{
    return produto.preco <= 499
}
const resistente = (produto) => {
    return produto.fragil == false
}

console.log(produtos.filter(barato))//.filter(resistente))
console.log(produtos.filter(barato).filter(resistente))
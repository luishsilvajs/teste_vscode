Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            newArray.push(this[index])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Macbook', preco: 3500, fragil: true },
    { nome: 'iPad', preco: 2500, fragil: true },
    { nome: 'Copo de vidro', preco: 10, fragil: true },
    { nome: 'Copo de plastico', preco: 7, fragil: false }
]

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
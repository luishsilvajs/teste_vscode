console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'teste'
}

console.log(module.exports) // sempre mantem a referência de module.exports, caso seja apontado para outro local, não funcionará

// maneira correta de mudar apontamento:
module.exports = {
    public: true
}
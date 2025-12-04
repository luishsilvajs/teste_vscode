// permite manipular e excluir os valores/atributos, mas não permite inserir novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 19.90,
    tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag

console.log(produto)

// permite manipular o valor dos atributos, mas não permite excluir ou inserir novo atributo
const pessoa = {
    nome: 'Luis',
    idade: 26
}

Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Henrique'
delete pessoa.nome
pessoa.idade = 27

console.log(pessoa)

// Freeze - congela e transforma o objeto em uma constante, não podendo ter nenhum tipo de alteração
const pessoa2 = {
    nome: 'Boni',
    idade: 20
}

Object.freeze(pessoa2)
pessoa.sobrenome = 'Henrique'
delete pessoa.nome
pessoa.idade = 27
console.log(pessoa2)
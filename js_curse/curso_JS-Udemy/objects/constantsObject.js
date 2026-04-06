const pessoa = {nome: 'Luis'} // --> pessoa aponta pra uma referência de memória onde o objeto foi criado

pessoa.nome = 'Lucas' // --> foi alterado o valor dentro da referência de memória, e não a referência que "pessoa" está apontando
console.log(pessoa)

// mudando referência de memória "pessoa"
// pessoa = {nome: 'Luis'} // -> isso irá causar erro, constantes não permitem mudar referência a que elas apontam


Object.freeze(pessoa) // congela o objeto pessoa, não pode mais ser manipulado
pessoa.nome = 'João'    // não funciona, mantendo o valor antes da ação freeze
console.log(pessoa.nome)
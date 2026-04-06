const notas = [6.7, 9.4, 9.8, 8.1, 7.7]

for (let index in notas) {
    console.log(`índice ${index}, nota ${notas[index]}`)
}

const pessoa = {
    nome: 'Luis',
    sobrenome: 'Henrique',
    peso: 84,
    idade: 26,
    apelido: 'Lone'
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${ pessoa[atributo]}`)
}
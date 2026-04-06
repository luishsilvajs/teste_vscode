const escola = [{
    Nome: 'turma M1',
    alunos: [{
        nome: 'Luis',
        nota: 9
    }, {
        nome: 'Boni',
        nota: 10
    }]
}, {
    nome: 'turma M2',
    alunos: [{
        nome: 'Monique',
        nota: 10
    }, {
        nome: 'Gabriel',
        nota: 7
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const nota1 = escola.map(getNotasTurma)
console.log(nota1)

Array.prototype.flatMap(function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
})

const nota2 = escola.flatMap(getNotasTurma)
console.log(nota2)
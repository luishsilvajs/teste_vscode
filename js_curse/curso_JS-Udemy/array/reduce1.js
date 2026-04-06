const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
console.log(alunos.map(a => a.nota))

const result = alunos.map(aluno => aluno.nota).reduce((acumlador, valorAtual) => {
    console.log(acumlador, valorAtual)

    return acumlador + valorAtual
})
console.log(result)
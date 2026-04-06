const aprovados = ['Luis', 'Monique', 'Mayara', 'Luan']

aprovados.forEach(function (nome, index) {
    console.log(`${index + 1}- ${nome}`)
})

aprovados.forEach((nome) => {
    console.log(nome)
})

const exibirAprovado = (aprovado) => {
    console.log(aprovado)
}

aprovados.forEach(exibirAprovado)
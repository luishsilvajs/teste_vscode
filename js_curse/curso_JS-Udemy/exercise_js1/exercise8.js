let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function analisaPontuacoes(stringPontuacoes) {
    let pontos = stringPontuacoes.split(", ")
    let recordBatidos = 0
    let piorPontuacao = 1
    let maiorPontuacao = pontos[0]
    let menorPontuacao = pontos[0]

    for (let i = 1; i < pontos.length; i++) {
        if (parseInt(pontos[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontos[i]
            recordBatidos++
        }
        else if (parseInt(pontos[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontos[i]
            piorPontuacao = i + 1
        }
    }

    return [recordBatidos, piorPontuacao]
}

console.log(analisaPontuacoes(stringPontuacoes))
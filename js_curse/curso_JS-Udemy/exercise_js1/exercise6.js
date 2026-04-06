function calcJurosSimples(capital, taxa, tempo) {
    const taxaConvert = taxa / 100
    const juros = capital * taxaConvert * tempo
    const montante = capital + juros

    return {
        juros: juros,
        montante: montante
    }
}

function jurosComposto(capital, taxa, tempo) {
    const taxaConvert = taxa / 100
    const montante = capital * Math.pow(1 + taxaConvert, tempo)
    const juros = montante - capital

    return {
        juros: juros,
        montante: montante
    }
}

function formatValue(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

let resultSimples = calcJurosSimples(1000, 50, 6)
let resultComposto = jurosComposto(1000, 5, 6)

console.log('Juros:', formatValue(resultSimples.juros), 'Montante:', formatValue(resultSimples.montante))
console.log('Juros:', formatValue(resultComposto.juros), 'Montante:', formatValue(resultComposto.montante))
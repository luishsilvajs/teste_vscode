function repeteValor(value, qtdRepeticao) {
    let result = []

    for (let repeat = 0; repeat < qtdRepeticao; repeat++) {
        result.push(value)
    }
    return result
}

console.log(repeteValor('oi', 5))
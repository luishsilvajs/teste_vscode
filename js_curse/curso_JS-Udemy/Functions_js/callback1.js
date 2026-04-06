const fabricantes = ['Mercedez', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// ForEach simula um evento de Loop para retornar os valores
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))
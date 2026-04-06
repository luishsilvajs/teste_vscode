const notas = [7.7, 8.2, 6.5, 6.1, 5.3, 8.9, 10, 9.9]

/// Sem callback
let notasBaixas = []
for (let value in notas) {
    if (notas[value] < 7) {
        notasBaixas.push(notas[value])
    }
}

console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)

const notasAltas = notas.filter(nota => nota >= 7)
console.log(notasAltas)
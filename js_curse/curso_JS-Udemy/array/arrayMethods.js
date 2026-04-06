const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()                                               // Remove ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()                                             // Remove primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')                                 // insere no primeiro elemento
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa')                     // insere ou exclui a partir de um determinado indice
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)                      // gera novo array a partir de um determinado indice
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)                  // gera novo array a partir de um determinado indice, porém, ignora o valor do indice informado como limite
console.log(algunsPilotos2)
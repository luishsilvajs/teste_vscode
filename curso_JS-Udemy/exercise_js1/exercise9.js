function classificaNota(nota) {
    if (nota < 38) {
        return `Reprovado - Nota ${nota}`
    }

    const proxMultiplo = Math.ceil(nota / 5 * 5)

    if (proxMultiplo - nota < 3) {
        return proxMultiplo
    }

    return nota
}

console.log(classificaNota(84)); 
console.log(classificaNota(29)); 
console.log(classificaNota(38)); 
console.log(classificaNota(73)); 
console.log(classificaNota(57));
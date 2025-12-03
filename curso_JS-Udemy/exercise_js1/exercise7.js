// Fórmula de baskhara  DELTA = B² - 4.a.c

function calcBaskhara(ax2, bx, c) {
    let resultados = []
    const calcDelta = (bx * bx) - (4 * ax2 * c)

    if (calcDelta < 0) {
        return 'Delta é negativo'
    }
    let x1 = (-bx + Math.sqrt(calcDelta)) / (2 * ax2)
    let x2 = (-bx - Math.sqrt(calcDelta)) / (2 * ax2)
    resultados.push(x1)
    resultados.push(x2)
    return resultados

}

console.log(calcBaskhara(3, -5, 12))


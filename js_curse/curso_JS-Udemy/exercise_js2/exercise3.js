function calcSalarioMes(valorHora, horasTrab){
    const salarioBruto = valorHora * horasTrab
    const salarioLiqd = salarioBruto - salarioBruto * 30 / 100

    return `Salário  igual a R$${salarioLiqd}.`
}

console.log(calcSalarioMes(60, 180))
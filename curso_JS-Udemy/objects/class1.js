class lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanc {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }

    addLancamento(...lancamento) {
        lancamento.forEach(l => this.lancamento.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const salario = new lancamento('Salário', 12000)
const contaLuz = new lancamento('Luz', -350)
const contas = new cicloFinanc(6, 2025)
contas.addLancamento(salario, contaLuz)

console.log(contas.sumario())
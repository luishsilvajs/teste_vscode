function formatMoney(valueDec){
    let valueBRL = `R$${valueDec.toFixed(2).toString().replace(".", ",")}`
    console.log(valueBRL)
}

formatMoney(0.1 + 0.2)

function formatMoney2(valueFormated){
    return valueFormated.toLocaleString('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    })
}

console.log(formatMoney2(0.1 + 0.2))
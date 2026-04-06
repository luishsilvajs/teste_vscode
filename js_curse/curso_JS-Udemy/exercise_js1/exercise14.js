function fruta(definirFruta) {
    switch (definirFruta) {
        case 'maçã':
            console.log(`Não vendemos ${definirFruta} aqui`)
            break
        case 'kiwi':
            console.log(`Estamos com escassez de ${definirFruta}`)
            break
        case 'melancia':
            console.log(`Aqui está, custa R$3,00 o Kg da ${definirFruta}`)
            break
        default:
            console.log('Fruta inválida')
    }
}

fruta('maçã')
fruta('kiwi')
fruta('melancia')
fruta('alcatra')
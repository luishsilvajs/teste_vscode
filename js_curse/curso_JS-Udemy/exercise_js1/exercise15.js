function comprarCarro(modelo) {
    switch (modelo) {
        case 'hatch':
            console.log('Compra realizada com sucesso!')
            break

        case 'sedan': case 'motocicleta': case 'caminhonete':
            console.log('Deseja seguir com essa opção de veículo?')
            break

        default:
            console.log('Modelo informado é inválido')
    }
}

comprarCarro('sedan')
comprarCarro('hatch')
comprarCarro('moto')
comprarCarro('carro')
comprarCarro('caminhonete')
function dayValid(valueDay) {
    switch (valueDay) {
        case 1:
            console.log(`Dia ${valueDay}, não é útil (Domingo)`)
            break
        case 2:
            console.log(`Dia ${valueDay}, é útil (Segunda-feira)`)
            break
        case 3:
            console.log(`Dia ${valueDay}, é útil (Terça-feira)`)
            break
        case 4:
            console.log(`Dia ${valueDay}, é útil (Quarta-feira)`)
            break
        case 5:
            console.log(`Dia ${valueDay}, é útil (Quninta-feira)`)
            break
        case 6:
            console.log(`Dia ${valueDay}, é útil (Sexta-feira)`)
            break
        case 7:
            console.log(`Dia ${valueDay}, pode ser útil (Sábado)`)
            break
        default:
            console.log('Dia informado não é valido')
    }
}

dayValid(1)
dayValid(2)
dayValid(3)
dayValid(4)
dayValid(5)
dayValid(6)
dayValid(7)
dayValid(8)
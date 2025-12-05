function saudar(nome){
    const saudacao = 'Bom dia'

    return [saudacao, nome].join(', ').concat("!")
}

console.log(saudar('Luis'))
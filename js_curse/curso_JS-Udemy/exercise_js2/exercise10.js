function repeatSymbol(repeater){
    let symbol = '+'
    let result = ''

    for (let repeat = 0; repeat < repeater; repeat++){
        result = result + symbol
    }
    return result
}

console.log(repeatSymbol(5))
console.log(this === global)
console.log(this === module)

// this fora de função aponta para as seguintes localidades de memória
console.log(this === module.exports)
console.log(this === exports)

// this dentre de função aponta para GLOBAL
function logThis() {
    console.log('Dentro de funcion')
    console.log(this === exports)
    console.log(this === module.exports)

    console.log(this === global)
    
    // this.perigo = '...' ---- expõe globalmentes
}
logThis()
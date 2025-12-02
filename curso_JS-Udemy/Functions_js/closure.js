// Closure - Escopo criado ao definir uma função
// Permite acessar e manipular variáveis externas à função utilizada

// Contexto léxico
const x = 'Global'

function out(){
    const x = 'Local'

    function inside(){
        return x
    }
    return inside
}

const myFunction = out()
console.log(myFunction())
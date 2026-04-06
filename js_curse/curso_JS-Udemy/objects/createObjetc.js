// notação literal de objetos
const obj1 = {
    nome: 'Luis',
    idade: 26
}

// Objecto JS
console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.preco = preco

    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const produto1 = new Produto('Caneta', 5.00, 0.15)
const produto2 = new Produto('Macbook', 3500.00, 0.25)
console.log(produto1.getPrecoComDesconto(), produto2.getPrecoComDesconto())

// Função Factory
function createEmploye(nome, salario, faltas){
    return {
        nome, 
        salario,
        faltas,
        getSalarioFinal() {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const employe1 = createEmploye('Luis', 5000, 5)
const employe2 = createEmploye('Boni', 2800, 1)
console.log(employe1.getSalarioFinal(), employe2.getSalarioFinal())

//Object.creat
const filho = Object.create(null)
filho.nome = 'Bonizinha'
console.log(filho)

// Uma função que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
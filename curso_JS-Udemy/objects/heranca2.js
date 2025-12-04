// Prototype chain - cadeia de protótipos

const avo = {
    attr1: 'A'
}
const pai = {
    __proto__: avo,
    atrr2: 'B'
}
const filho = {
    __proto__: pai,
    attr3: 'C'
}
console.log(filho.attr1)

const carro = {
    velAtu: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtu + delta <= this.velMax) {
            this.velAtu += delta
        } else {
            this.velAtu = this.velMax
        }
    },
    status() {
        return `${this.velAtu}KM/h de ${this.velMax}KM/h`
    }
}

const ferrari ={
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar(190)
console.log(volvo.status())

ferrari.acelerar(265)
console.log(ferrari.status())
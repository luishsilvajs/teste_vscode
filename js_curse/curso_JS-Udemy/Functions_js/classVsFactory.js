class Person {
    constructor(name) {
        this.name = name
    }
    say() {
        console.log(`Meu nome é ${this.name}`)
    }
}

const p1 = new Person('Luis')
p1.say()

const person = name => {
    return {
        say: () => console.log(`Meu nome é ${name}`)
    }
}

const p2 = new Person('Monique')
p2.say()
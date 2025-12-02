function Person(name) {
    this.name = name

    this.say = () => {
        console.log(`Meu nome é ${this.name}`)
    }
}

const p1 = new Person('Luis')
p1.say()
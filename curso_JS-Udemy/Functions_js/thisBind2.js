function pessoa() {
    this.idade = 0

    const self = this                                       // Utilizado para definir corretamente a declaração do 'this', e não ocasionar conflito
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000);
}

new pessoa
Array.prototype.forEach2 = function (callback) {
    for (let index = 0; index < this.length; index++)
        callback(this[index], index, this)
}

const aprovados = ['Luis', 'Monique', 'Mayara', 'Luan']

aprovados.forEach2(function (nome, index) {
    console.log(`${index + 1}- ${nome}`)
})
const fs = require('fs')

const path = __dirname + '/archive.json'

// leitura sincrona
const conteudo = fs.readFileSync(path, 'utf-8')
console.log(conteudo)

// leitura assincrona
fs.readFile(path, 'utf-8', (error, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.porta}`)
})

const config = require('./archive.json')
console.log(config.db)

fs.readdir(__dirname, (error, conteudo) => {
    console.log('arquivos de uma pasta:')
    console.log(conteudo)
})
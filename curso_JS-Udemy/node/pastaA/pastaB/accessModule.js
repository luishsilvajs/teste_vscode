const moduleA = require('../../moduleA')
console.log(moduleA.ola)

// const saudacao = require('saudacao') ---- busca dentro de node_modules

const http = require ('http')
http.createServer((req, red ) =>{
    res.write('Bom dia')
    res.end()
}).listen(8080)

const c = require('./pastaC/index')
const { readdirSync } = require('fs')
console.log(c.ola2)

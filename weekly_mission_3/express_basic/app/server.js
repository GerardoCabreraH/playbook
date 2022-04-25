//Usando ExpressJS
const express = require('express')

//App de Express
const app = express()

//Ruta raiz que respondera a la url http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hola mundo')
})

//Nueva ruta
//http://localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx')
})

//Regresando un objecto
//http://localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = { name: "Explorer", msg: "Hello" }
    res.send(explorer)
})

/*
Query Params: Recibir parametros por la url
http://localhost:3000/explorersInNode/soyElExplorerGerardo
*/
app.get('/explorersInNode/:explorerName', (req, res) => {
    res.send(req.params)
})

module.exports = app

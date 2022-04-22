//Usando ExpressJS
const express = require('express')

//App de Express
const app = express()

//Puerto utilizado para la app
const port = 3000

//Ruta raiz que respondera a la url http://localhost:3000/
app.get('/', (req, res) => {
    res.status(200).send('Hola mundo')
})

//Nueva ruta
//http://localhost:3000/launchx
/*app.get('/launchx', (req, res) => {
    res.status(200).send('Bienvenidos a launchx')
})*/

//Regresando un objecto
//http://localhost:3000/explorersInNode
/*app.get('/explorersInNode', (req, res) => {
    const explorer = { name: "Explorer", msg: "Hello" }
    res.status(200).send(explorer)
})*/

/*
Query Params: Recibir parametros por la url
http://localhost:3000/explorersInNode/soyElExplorerGerardo
*/
/*app.get('/explorersInNode/:explorerName', (req, res) => {
    res.send(req.params)
})*/

//Llamar a la aplicación
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//Importar servidor
const app = require('./app/server')

//Puerto utilizado para la app
const port = 3000

//Iniciar servidor
const start = (port) => {
  try {
    //Llamar a la aplicación
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (err) {
    //Llamar al error de la aplicación
    console.error(err);
    process.exit();
  }
};
  
start(port);

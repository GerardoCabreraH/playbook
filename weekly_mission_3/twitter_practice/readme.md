# Practica de la semana 3

## Proceso de creacion de la aplicacion

1. Crear aplicación NodeJS mediante el comando `npm init` <br> ![npm-init](/img/semana3/npm-init.png)
2. Crear archivo `.gitignore` para no subir a Github la carpeta de `node_modules` <br> ![gitignore](/img/semana3/gitignore.png)
3. Instalar JEST `npm install --save-dev jest` <br> ![install-jest](/img/semana3/install-jest.png)
4. Instalar Express `npm install express --save` <br> ![install-express](/img/semana3/install-express.png)
5. Añadir funcionamiento para el comando `npm start` para iniciar la aplicación `node app.js` y el funcionamiento para el comando `npm test` para testear la aplicación `node ./node_modules/jest/bin/jest` <br> ![comandos](/img/semana3/comandos.png)
6. Crear carpeta `app` y dentro de esa carpeta añadir las carpetas `models`, `services` y `views` del ejercicio [twitter](https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS) <br> ![app-folder](/img/semana3/app-folder.png)
7. Crear carpeta `test` y dentro de esa carpeta añadir las carpetas `models`, `services` y `views` del ejercicio [twitter](https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS) <br> ![test-folder](/img/semana3/test-folder.png)
8. En el archivo `app/views/userView.js` definir las funciones de para prepararlas al servidor <br> ![methods-http](/img/semana3/methods-http.png)
9.  Crear un archivo para iniciar el servidor `app.js` <br> ![app-express](/img/semana3/app-express.png)
10. Iniciar la aplicacion mediante el comando puesto en el paso 4 `npm start` <br> ![npm-start](/img/semana3/npm-start.png)
11. Probar la aplicacion mediante el comando puesto en el paso 5 `npm test` <br> ![npm-test](/img/semana3/npm-test.png)
12. Probar las rutas de la aplicación puestas en el archivo `app.js` mediante `POSTMAN` y si tienes Visual Studio Code mediante `Thunder Client` <br> Ver todos los datos <br> ![get-all-users](/img/semana3/get-all-users.png) <br> Crear un nuevo dato <br> ![post-new-user](/img/semana3/post-new-user.png) <br> Ver un dato ![get-user](/img/semana3/get-user.png) <br> Modificar un dato <br> ![put-existed-user](/img/semana3/put-existed-user.png) <br> Borrar un dato ![delete-user](/img/semana3/delete-user.png)


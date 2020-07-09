# nodemon

Ahora tenemos la ruta principal y podemos probar cada ruta con Postman. Sin embargo, después de cada cambio, necesitamos **reiniciar** el servidor donde generalmente lo olvidamos.


Hay un paquete npm llamado "**nodemon**" que reinicia el servidor cada vez que hacemos algunos cambios. Instalemos este paquete y configurémoslo correctamente, para que no necesitemos reiniciar el servidor manualmente después de cada cambio. Para instalar el paquete, use el siguiente comando:

  $ npm install --save-dev nodemon

> Tenga en cuenta que usamos **--save-dev** para la opción. La parte **--save** significa que agregará este paquete dentro de las dependencias del archivo **package.json** y la parte **-dev** indica que lo agregará dentro de devDependencies , porque no necesitamos dicha herramienta cuando publicamos u hospedamos nuestro servidor.

Después de la instalación, puede verificar el archivo package.json para las siguientes líneas (la versión puede variar):

```json
// package.json
"devDependencies": {
  "nodemon": "^1.18.3"
}
```

Pero solo instalarlo no es suficiente. Necesitamos configurarlo en nuestros scripts package.json. Por ahora, nuestro script es el siguiente:

```json
// package.json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}
```
Esto no hace nada específico, así que eliminemos y reemplacemos con lo siguiente:

```json
// package.json
"scripts": {
  "start": "nodemon server.js"
}
```

Ahora necesita ejecutar el siguiente comando para iniciar el servidor:

    $ npm start

> Se iniciará el servidor de nodemon, que vigila constantemente todos los cambios (incluso los comentarios) y reinicia el servidor en cada cambio.

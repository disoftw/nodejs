

# Primer controlador de solicitudes
Ahora que sabe qué es Express y lo ha instalado, creemos el servidor. Puede recordar de la lección **Crear servidor web** que para crear un servidor, necesitamos importar el módulo incorporado '**http**'.

Hagamos eso dentro del archivo server.js:
```js
// server.js
const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer();
server.listen(port); 
```


>!En esta parte, la primera línea comentada de cada fragmento de código especifica con qué archivo estamos trabajando.

Observe que hemos utilizado la **variable de entorno** con el PORT (** proceso.env.PORT **) en el puerto de la variable. Esto significa que Node buscará una variable 'PORT' en sus variables de entorno (** process.env **) y si no se encuentra nada (||), entonces usará automáticamente el puerto 3000.

Ahora tenemos un servidor simple que manejará la parte principal de nuestro servicio API. Vamos a escribir nuestro primer handler de solicitudes usando Express, que devolverá lo mismo para cualquier tipo de solicitud.
Modifique el archivo app.js, e importe el módulo express:
```js
// app.js
const express = require('express');
const app = express();
```

Ahora escribamos el handler de solicitud así:

```js
// app.js
app.use((req, res, next) => {
  res.status(200).json({
    message: 'Hello World!'
  });
});
```

El método **use ()** anterior se configura como middleware y la solicitud entrante lo procesa. Ahora estamos configurando un controlador donde toma los argumentos **req** (solicitud), **res** (respuesta) y **next** (función) donde **next** pasa la solicitud a el siguiente middleware si hay uno disponible.
Entonces, en la respuesta, estamos configurando un estado de 200 (Ok) para responder y pasar el mensaje como un objeto JSON.

Queda una cosa por hacer: exportar el objeto de la aplicación para poder adjuntarlo al servidor.

```js
// app.js
 module.exports = app;
 ```

Ahora volvamos al archivo server.js y agreguemos lo siguiente:

```js
// server.js
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
```
La configuración anterior nos permitirá enviar una solicitud al servidor y obtener una respuesta de estado Ok y el mensaje especificado.

Para ejecutar el servidor, necesita el siguiente comando:
`$ node server.js`
It will start the server on your localhost on the port **3000** if there is no **.env** set.
Iniciará el servidor en su localhost en el puerto **3000** si no hay un **.Env** configurado.

>En la próxima lección, aprenderá cómo enviar una solicitud y obtener una respuesta del servidor.

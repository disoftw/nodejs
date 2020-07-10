# Ruta de usuarios (GET)

Necesitamos tener todas nuestras cosas específicas de la API, como **rutas**, en un solo lugar. Así que creemos un directorio '**api**' y un subdirectorio de 'rutas', donde guardaremos nuestros archivos '**codes.js**' y '**users.js**'. Entonces, la **estructura** es la siguiente:
```
.
├── api
│  │
│  └── routes
│      ├── codes.js
│      └── users.js
├── app.js
├── package.json
└── server.js
2 directories, 5 files
```

Ahora que tenemos el archivo **api/routes/users.js**, creemos nuestra primera ruta de usuario (GET) que devolverá a todos los usuarios. El archivo **api/routes/users.js** contendrá todas las rutas relacionadas con los usuarios.

Abra el archivo api/routes/users.js e importe el módulo 'express'. Necesitamos llamar al método **Router()** en la instancia Express para usar las funcionalidades de enrutamiento:

```js
// users.js
const express = require('express');
const router = express.Router();
```
Ahora, necesitamos usar el enrutador para implementar manejadores de solicitud (handlers) de la API para el usuario **resource**.

```js
// users.js
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request of the /users'
  });
});
```

**get()** es un método que toma dos argumentos. El primero es el *URL** y el segundo argumento es la función **handler**. No hay nada nuevo en el cuerpo del controlador (handler), donde responde con el estado de 200 en formato JSON con un mensaje personalizado.

:::tip 
Tenga en cuenta que el primer argumento del método **get()** es URL, y solo estamos usando una barra diagonal (/). Pero queremos que nuestra ruta sea **/localhost:3000/users/**. Para eso, necesitamos algunas modificaciones en el archivo **app.js**.
:::

## Configuración de la ruta usuarios

Ya agregamos nuestra ruta GET en el archivo users.js, pero necesitamos arreglar algunas cosas.

Sabemos que nuestra URL base es **localhost: 3000**, y todo lo que esté dentro del archivo users.js debe estar debajo de **localhost: 3000/users**, así que configurémoslo desde el archivo app.js donde estará manejando todas las solicitudes entrantes de la ruta users.js atacando a /**users** antes de la ruta en sí.

Primero, importe el users.js dentro del archivo app.js:

```js
// app.js
const usersRoutes = require('./api/routes/users')
```

Ahora, modifiquemos el método **app.use ()** para recibir las solicitudes **usersRoutes** y adjuntemos la URL (ruta):

```js
// app.js
const usersRoutes = require('./api/routes/users')
app.use('/users', usersRoutes)
```

:::tip
Tenga en cuenta que si en users.js escribimos nuestra ruta GET como: '/**users**/' en lugar de '/', nuestra ruta completa será: **localhost: 3000/users/users**, que **no** es el nombre deseado.

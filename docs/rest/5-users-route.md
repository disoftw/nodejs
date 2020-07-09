# configuración de la ruta usuarios js

Ya agregamos nuestra ruta GET en el archivo users.js, pero necesitamos arreglar algunas cosas.

Sabemos que nuestra URL base es **localhost: 3000**, y todo lo que esté dentro del archivo users.js debe estar debajo de **localhost: 3000/users**, así que configurémoslo desde el archivo app.js donde estará manejando todas las solicitudes entrantes de la ruta users.js atacando a /**users** antes de la ruta en sí.

Primero, importe el users.js dentro del archivo app.js:
```js
// app.js
const usersRoutes = require('./api/routes/users');
```

Ahora, modifiquemos el método **app.use ()** para recibir las solicitudes **usersRoutes** y adjuntemos la URL (ruta):
```js
// app.js
const usersRoutes = require('./api/routes/users');
app.use('/users', usersRoutes);
```

Tenga en cuenta que si en users.js escribimos nuestra ruta GET como: '/**users**/' en lugar de '/', nuestra ruta completa será: **localhost: 3000/users/users**, que **no** es el nombre deseado.

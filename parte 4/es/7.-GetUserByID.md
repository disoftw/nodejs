# Obtener el usuario por ID js

Ahora queremos obtener los datos de un solo usuario por su ID. Nuevamente vamos a utilizar una solicitud GET, pero en este caso, la ruta debe ser dinámica. Por ejemplo, '**/users/1234**' o '**/users/ admin**' etc. Queremos procesar todas estas rutas en un solo controlador (handler).

Para eso necesitamos usar un **marcador de posición (placeholder)** en la URL llamada **parámetro de solicitud (request parameter)**. Express proporciona extracción de parámetros de solicitud mediante **req.params**. El siguiente código usa '**:userID**' en la ruta y lo extrae dentro de la (callback).
```js
// users.js
router.get('/:userID', (req, res, next) => {
  const id = req.params.userID;
});
```
Entonces, aquí el userID es un marcador de posición (placeholder) para la variable de parámetro de solicitud (indicado por: (colon) ), al que se puede acceder desde **req.params.userID**. Puede usar cualquier nombre válido para variables de parámetros de solicitud.

Ahora manejemos el ID. Por ejemplo, verifiquemos el ID de usuario con el valor 'admin' y respondamos correctamente.
```js
// users.js
router.get('/:userID', (req, res, next) => {
  const id = req.params.userID;

  if (id === 'admin') {
    res.status(200).json({
      message: 'You are the Admin!',
      ID: id
    });
  } else {
    res.status(200).json({
      message: 'You are a standard user',
      ID: id
    });
  }
});
```

Aquí, comparamos la ID con la cadena 'admin' y devolvemos un mensaje personalizado como lo hicimos antes y respondemos con uno diferente en otros casos.

Ahora, intentemos entrar a la ruta con diferentes parametros en Postman:
**Solicitud GET: localhost:3000/users/admin**

**Solicitud GET: localhost:3000/usuarios/1234**

>¡No olvide **iniciar/reiniciar** su servidor antes de probarlo con Postman!
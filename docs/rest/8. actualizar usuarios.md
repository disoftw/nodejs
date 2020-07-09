# Actualizar usuarios

Completemos nuestras rutas **/users** con solicitudes **PATCH** y **DELETE**.
Nuevamente, necesitamos un usuario específico para esas acciones, por lo que debemos usar "userID" en las rutas. Esto ayudará a modificar al usuario por su ID única.

Entonces, el método **PATCH** será:

```js
// users.js
router.patch('/:userID', (req, res, next) => {
  const id = req.params.userID
  // find and update user by id
  res.status(200).json({
    message: 'User updated!'
  })
})
```

El método de solicitud **PATCH** aplica **modificaciones parciales** a un recurso. El método HTTP PUT solo permite el reemplazo completo de un documento. **PATCH** no es idempotente, lo que significa que las solicitudes de parches idénticas sucesivas pueden tener diferentes efectos.

Y el método **DELETE**:

```js
// users.js
router.delete('/:userID', (req, res, next) => {
  const id = req.params.userID
  // find and delete user by id
  res.status(200).json({
    message: 'User Deleted!'
  })
})
```

Vamos a iniciar/reiniciar el servidor y probar rápidamente los nuevos métodos con Postman:

**PATCH Request: localhost:3000/users/admin**

**DELETE Request: localhost:3000/users/1234**

> Es una buena práctica probar cada nueva ruta justo después de la creación para evitar errores inesperados más adelante.

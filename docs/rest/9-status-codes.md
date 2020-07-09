# Códigos de estado

Hasta ahora, hemos construido la base de nuestras rutas; sin embargo, no es una buena práctica usar solo el código de estado 200 (OK) para todas las respuestas.

En general, los [códigos de estado HTTP](https://restfulapi.net/http-status-codes/) se dividen en cinco categorías, pero ahora solo necesitamos uno: los códigos 2XX.

Por ahora, solo hay un código de estado que debemos cambiar: el de nuestra ruta POST. El código de estado HTTP 201 se usa siempre que se crea un recurso dentro de una colección. Entonces, regresemos al archivo users.js y editemos el código de estado:

```js
// users.js
router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST request of the /users'
  })
})
```

Tenga en cuenta que el estado es **201** en la imagen de arriba.

Enviemos una solicitud POST usando Postman y veamos el resultado.

**POST Request: localhost:3000/users**

<!-- ![](./post.png) -->

> De ahora en adelante, solo utilizaremos los códigos de estado correctos para cada respuesta, donde los más comunes son 200, 201, 404 y 500.

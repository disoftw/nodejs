# Body Parser en uso

En la lección anterior, agregamos el analizador de cuerpo para extraer los datos de los cuerpos de solicitud entrantes. En esta lección, lo implementaremos en nuestras rutas /users y /codes para obtener los datos deseados.

Ahora en nuestros controladores de ruta (digamos POST, donde esperamos obtener datos), podemos leer el cuerpo con el siguiente código:

```js
router.post('/', (req, res, next) => {
  const data = req.body.sampleData
})
```

Aquí el sampleData es solo una palabra aleatoria. Pero debe coincidir con la propiedad en la solicitud entrante. Entonces, usando el código anterior, el cuerpo de la solicitud POST debería verse así:

{"sampleData": "Datos aleatorios"}

Ahora manejemos el cuerpo de la solicitud en el controlador POST de la ruta de usuarios:

```js
// users.js
router.post('/', (req, res, next) => {
  const user = {
    name: req.body.name,
    age: req.body.age
  }
  res.status(201).json({
    message: 'Handling POST request of the /users',
    user: user
  })
})
```

Ahora escribamos el cuerpo y veamos la respuesta:

![](post-2.png)

Hagamos lo mismo para /codes:

```js
// codes.js
router.post('/', (req, res, next) => {
  const code = {
    language: req.body.lang,
    data: req.body.data
  }
  res.status(201).json({
    message: 'Handling POST request of the /codes',
    code: code
  })
})
```

La solicitud del cartero se verá así:

> Entonces, manejamos con éxito dos solicitudes con diferentes cuerpos a dos rutas y obtuvimos los resultados.

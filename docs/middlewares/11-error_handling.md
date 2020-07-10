# Manejo de errores

Siempre es posible que una solicitud sea incorrecta, ya sea debido a un error humano o errores de código. Por lo tanto, debemos mejorar nuestra API e incluir un controlador de errores central que detecte los errores principales y no permita que el servidor se bloquee.

Recuerde que en app.js, teníamos un middleware para manejar todas las solicitudes entrantes a la ruta **/users**. Nuestro error al manejar el middleware detectará cualquier cosa que no sea capturada por ese middleware o cualquier otro (lo agregaremos más adelante).

Primero, manejemos el error **No encontrado**. Para esto, necesitamos usar el objeto de la aplicación nuevamente y, al igual que cualquier otra ruta, obtener los parámetros **req, res** y **next** y devolver una devolución de llamada. Este fragmento de código debe estar al final de su archivo app.js, justo antes de la exportación.


```js
// app.js
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})
```

Entonces, en el código anterior, recibimos la solicitud y arrojamos un objeto de error, adjuntamos el código de estado
**404** (que significa **No encontrado**), y finalmente pasamos el objeto de error al **next()**.

Pero, hasta ahora, no tenemos nada que atrape el **next()**. Entonces, creemos un controlador de errores general que obtenga la **next()** y la maneje adecuadamente.

Los manejadores de errores necesitan un parámetro adicional más: error.

```js
// app.js
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error
  })
})
```

Aquí verificamos si hay un estado personalizado en el error, y si no, por defecto, devolverá el estado 500. El resto es similar a lo que hicimos en las lecciones anteriores, creando un objeto JSON personalizado para la respuesta.

Usted es libre de manejar el cuerpo JSON como lo desee. Por ejemplo, puede optar por obtener solo el mensaje de error y devolverlo como mensaje, por ejemplo:

```js
//app.js
...
res.json({
  error: {
    message: error.message
  }
});
```

Entonces, enviemos una solicitud incorrecta que no se maneja y veamos el resultado:

**GET Request: localhost:3000/**

Intente cambiar el cuerpo de JSON para leer el mensaje de error como se muestra arriba y envíe la misma solicitud nuevamente para ver la diferencia.

:::warning IMPORTANTE
Es esencial distinguir entre los **manejadores de Solicitud** y los **manejadores de Error**. Se implementan de manera diferente y funcionan de manera diferente en el marco Express. Los **manejadores de solicitudes** obtendrán como máximo 3 parámetros (como req, res y next), pero los **manejadores de errores** necesitan 4 parámetros (como **error, req, res** y **next**).

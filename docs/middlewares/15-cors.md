# CORS

**Intercambio de recursos de origen cruzado (CORS)** es un mecanismo que permite solicitar recursos restringidos en una página web desde **otro dominio** fuera del dominio desde el que se sirvió el primer recurso.

Por defecto, este comportamiento no está permitido por razones de seguridad, pero en el caso de RESTful API, la idea es dejar que otros usen el servidor libremente y obtengan los datos proporcionados. Después de agregar CORS a nuestra API, cualquier persona, desde herramientas como Postman y navegadores (páginas web), puede enviarnos una solicitud y obtener la respuesta.

Vayamos al archivo app.js y agreguemos el middleware adecuado que manejará esto. Vamos a escribir nuestro propio CORS, pero es posible usar paquetes para lograr el mismo resultado.

Lo colocaremos justo después del bodyParser y antes de los controladores de ruta:
```JS
// app.js
...
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
      return res.status(200).json({});
  }
  return next();
});

```


Aquí estamos configurando dos encabezados. Primero, el encabezado "**Access-Control-Allow-Origin**" controla quién puede enviar una solicitud. Al darle el valor *, le damos permiso a cualquiera. Para restringir el permiso a un dominio específico, escriba el dominio en lugar del asterisco (*).

:::tip
Es importante saber que configurar un dominio específico solo lo protegerá de los navegadores. Herramientas como Postman y CURL ignoran esos datos y pueden enviar una solicitud en cualquier condición de CORS.
:::

El siguiente encabezado es "**Access-Control-Allow-Headers**", que nos permite configurar diferentes tipos de encabezados con la solicitud. En este caso, "**Origen, X-Solicitado con, Tipo de contenido, Aceptar, Autorización**".

La condición "**req.method === 'OPTIONS'**" se envía de forma predeterminada desde los navegadores justo antes de la solicitud para verificar si tiene permiso para enviar ese tipo de solicitud. En este caso, queremos permitir que el navegador / cliente envíe tipos de solicitudes "GET, PUT, POST, DELETE".

Pero este middleware bloqueará todas las solicitudes entrantes. Necesitamos llamar "return next ()" al final, por lo que después de configurar los encabezados (no enviar una respuesta de método, porque tiene su respuesta / retorno), continuará a nuestros otros middlewares y no se atascará ahí.

:::warning IMPORTANTE
En el primer caso, no estamos devolviendo una respuesta (solo configurando). Pero en el último caso, donde los navegadores buscan métodos válidos, debemos enviar una respuesta. En este caso, es solo un objeto vacío.
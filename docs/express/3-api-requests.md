# Hacer solicitudes a la API

En la lección anterior donde iniciamos el servidor en nuestro localhost, no enviamos/recibimos ninguna solicitud/respuesta del servidor. Entonces, veamos los diferentes métodos para interactuar con el servidor.

## Navegador
En este caso, cuando no esté pasando ningún valor con la solicitud, puede usar la URL del navegador para enviar una solicitud GET: localhost:port.

## Postman
**Postman** es una herramienta poderosa para enviar cualquier tipo de solicitud al servidor con la capacidad de establecer y alterar todos los parámetros de la solicitud. Por ejemplo, puede establecer un JSON con algunos encabezados de autenticación, etc.

## CURL
**CURL** es una poderosa herramienta de línea de comandos y libreria para transferir datos con URLs.

En el caso de una simple solicitud GET, podemos usar el navegador. Si ingresa localhost: seguido del puerto (en este caso 3000) "**localhost: 3000**", obtendrá la siguiente respuesta en el navegador:

"imagen con respuesta delocalhost:3000"

Como se especificó en la lección anterior, devolvió el objeto JSON con la clave del mensaje y el valor "¡Hola, mundo!".

La misma solicitud con Postman sería:

"imagen en postman para obtener ruta"

Como puede ver, Postman devuelve datos mucho más detallados de la solicitud, como el código de estado, cuánto tiempo demora la solicitud y la salida en un JSON con formato agradable.

:::tip
Siéntase libre de jugar con los parámetros de Postman y ver los diferentes tipos de respuestas que soporta. Puede encontrar el software y su documentación [aquí](https://www.postman.com/downloads/). Tenga en cuenta que, a lo largo del curso, todos los ejemplos vendrán con capturas de pantalla de Postman.
:::
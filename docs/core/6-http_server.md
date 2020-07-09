# Crear servidor web

En esta lección, crearemos un servidor HTTP, lo iniciaremos y veremos la respuesta en el navegador. Vamos a usar **ES6**. Si no está familiarizado con él, puede aprenderlo [aquí](https://www.w3schools.com/Js/js_es6.asp).

Para usar el servidor y el cliente HTTP, debemos usar el módulo **http**, establecer el número de puerto que queremos conectar y definir el host que vamos a usar.

```JS
const http = require ('http');
const hostname = '127.0.0.1';
puerto const = 3000;
```

Vamos a crear el servidor:

```JS
...
const server = http.createServer ((req, res) => {
  res.statusCode = 200;
  res.setHeader ('Content-Type', 'text/plain');
  res.end ('¡Hola, mundo!\n');
});
```


Aquí creamos el servidor, configuramos el código de estado de respuesta a 200, le damos un tipo de encabezado correcto y enviamos un texto sin formato al cliente.

Hasta ahora creamos el servidor, pero no está **escuchando** al host y al puerto. Para configurar eso:

```JS
server.listen (puerto, nombre de host, () => {
  console.log (`El servidor se ejecuta en http://${hostname}:${port}/`);
});
```

El servidor escucha el puerto y el host, donde la devolución de llamada es console.log y devuelve los datos al terminal.

Ahora podemos ejecutar el servidor usando el comando: **node app.js.**
Dentro del navegador, visite [http://localhost:3000](http://localhost:3000), y verá el mensaje **'¡Hola, Mundo!'**. Y verá **"Servidor ejecutándose en http://127.0.0.1:3000/"** en la terminal.

:::tip 
Hasta ahora no hemos usado package.json o node_modules, pero es una buena práctica tenerlos desde el principio porque siempre los vamos a necesitar.
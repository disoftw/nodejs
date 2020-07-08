# Secuencia de escritura y lectura

Veamos com o se utilizan las secuencias y comprendamos por qué son vitales para la aplicación de Node.js, comenzaremos usando una secuencia para crear un archivo grande para ver que tan utiles son.

```js
const fs = require('fs');
const file = fs.createWriteStream('./big-file.txt');

for(let i = 0; i <= 1000000; i++) {
  file.write('This is just a text that we are going to write to the big-file.txt one million times. So it becomes a big file (around 150MB) for Stream example purposes.\n');
}
file.end();
```

El módulo '**fs**' se puede usar para leer y escribir en archivos usando una interfaz de flujo, en el ejemplo anterior estamos usando un bucle for para escribir en 1 millón de líneas a través de una secuencia de escritura en **big-file.txt**.

Ahora necesitamos servir el **big-file.txt**:

```js
const server = require('http').createServer();
const fs = require('fs');

server.on('request', (req, res) => {
  fs.readFile('./big-file.txt', (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(3000);
```

Cuando un servidor recibe una solicitud, intentará servir el archivo mencionada de manera asincrona utilizando el metodo de `fs.readFile()`. 
# Tuberías

La tubería es un mecanismo útil que le permite leer datos del origen y escribir en el destino sin administrar el flujo usted mismo.

Las siguientes funciones de secuencia de lectura se utilizan en tuberías.

`readable.pipe(destination[, options])`: Este método adjunta una secuencia de escritura a lo legible, cambia automáticamente al modo de flujo y envía todos sus datos a la escritura. La secuencia de lectura nunca se transmitirá más rápido de lo que la secuencia de escritura puede consumir.

*Puede adjuntar múltiples secuencias de escritura a una sola secuencia legible.*

`readable.unpipe([destination])`: Este método separa una secuencia de escritura previamente adjunta usando el método `pipe()`. Si no se especifica el destino, todas las tuberías se separan.

Aquí hay un ejemplo básico de tuberías:

```js
const fs = require('fs');
const readable = fs.createReadStream('./big-file.txt');
const writable = fs.createWriteStream('newFile.txt');
readable.pipe(writable);
```

Simplemente leemos el contenido de **big-file.txt** y lo escribimos en **newFile.txt**.

## Encadenamiento

En algunos casos, incluso es posible encadenar las tuberías. Por ejemplo, hay un módulo en Node.js llamado zlib, que nos proporciona la funcionalidad de compresión implementada usando Gzip. Para usar zlib, necesitamos requerir ('zlib');

Ahora veamos un ejemplo, donde intentaremos reducir el tamaño del archivo big-file.txt:

```js
const fs = require('fs');
const zlib = require('zlib');
const input = fs.createReadStream('big-file.txt');
const zip = zlib.createGzip();
const output = fs.createWriteStream('small-file.txt.gz');
input.pipe(zip).pipe(output);
```

---

El método `pipe()` devuelve una referencia a la secuencia de salida, lo que permite configurar cadenas de secuencias canalizadas.

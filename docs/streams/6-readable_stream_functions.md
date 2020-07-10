# Funciones de secuencia de lectura

Repasaremos las funciones importantes y veamos para qué se utilizan.

`readable.read([size])`: Este método extrae algunos datos del búfer interno y los devuelve. Si no hay datos disponibles para leer, se devolverá nulo. Si no se especifica el argumento de tamaño opcional, se devolverán todos los datos contenidos en el búfer interno. En caso de devolver una porción de datos, también se emitirá el evento 'data'.

El método `read()` solo debe invocarse en secuencias de lectura que funcionan en modo de pausa. En **the flowing mode**, `read()` se llama automáticamente hasta que el búfer interno esté completamente drenado.

`readable.setEncoding(encoding)`: Este método establece la codificación de caracteres para los datos leídos de la secuencia legible. Por defecto, no hay codificación. Establecer una codificación hace que la secuencia devuelva los datos como una cadena.

`readable.pause()`: Este método dejará de emitir los eventos de 'data' en el modo de flujo y cambiará al modo de pausa. El método `isPaused()` devuelve el estado de la secuencia actual. Si llamamos al método `pause()`, esto devolverá verdadero, de lo contrario falso.

`readable.resume()`: Este método hace que una secuencia de lectura pausada manualmente reanude la emisión de eventos de 'data', cambiando la secuencia al modo de flujo (desde el modo pausado). Después de llamar a este método, `isPaused()` devolverá falso.

```js
const fs = require('fs');
const readable = fs.createReadStream('./file.txt');
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  console.log(`isPaused(): ${readable.isPaused()}`); // false
  readable.pause();
  console.log(`isPaused(): ${readable.isPaused()}`); // true
  console.log('There will be no data for 2 seconds.');
  setTimeout(() => {
    console.log('Data will start flowing again.');
    readable.resume();
    console.log(`isPaused(): ${readable.isPaused()}`); // false
  }, 2000);
});

readable.on('end', () => {
  console.log('There is no more data.');
});
```

---

*Nuevamente, usamos el mismo código base que en la lección anterior y agregamos los métodos pause (), isPaused () y resume ().*

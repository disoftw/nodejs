# Operaciones de archivos asíncronos vs síncronos

Ahora que aprendió qué son los **módulos** y cómo funcionan los **métodos** del módulo **fs**, es el momento de comprender la diferencia entre los métodos **asíncronos** y **síncronos** . Por lo general, se conoce como códigos **bloqueantes** o **sin bloqueo**.
 
**Bloqueo** es cuando la ejecución debe esperar hasta que se complete una operación que no sea JavaScript. Esto sucede porque el bucle de eventos no puede continuar ejecutando JavaScript mientras se produce una operación de bloqueo. Por lo general, las operaciones de E / S son las operaciones de bloqueo.
Los métodos de bloqueo se ejecutan **sincrónicamente** y los métodos sin bloqueo se ejecutan **asincrónicamente**.

Todos los métodos de E / S en Node.js proporcionan versiones asincrónicas, que no bloquean, y aceptan **funciones de devolución de llamada**. Algunos métodos también tienen versiones de bloqueo, que tienen nombres que terminan con "Sincronización".

Veamos cómo debemos usar Asincrónico y Sincrónico de un método ya familiar, `readFile()`. La versión sincrónica:

```js
const fs = require('fs');
const data = fs.readFileSync('/file.txt'); // blocks here until file is read
console.log(data);
someWork(); // will run after console.log
```
Y la versión asincrónica:
```js
const fs = require('fs');
fs.readFile('/file.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});
someWork(); // will run before console.log
```
En el primer ejemplo anterior, se llamará a console.log antes de `someWork()`. En el segundo ejemplo, `fs.readFile()` es **sin bloqueo**, por lo que la ejecución de JavaScript puede continuar y se llamará a `someWork()` primero. La capacidad de ejecutar `someWork()` sin esperar a que se complete la lectura del archivo es una opción de diseño clave que permite un mayor rendimiento.

Mezclar códigos bloqueantes y no bloqueantes es peligroso. Por ejemplo, si intenta leer un archivo asincrónicamente y eliminarlo sincrónicamente, primero puede eliminar el archivo y luego intentar leerlo. Por ejemplo:

```js
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.unlinkSync('/file.md');
```
Donde estaría la versión completamente asíncrona:
```js
const fs = require('fs');
fs.readFile('/file.md', (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data);
  fs.unlink('/file.md', (unlinkErr) => {
    if (unlinkErr) throw unlinkErr;
  });
});
```
:::warning IMPORTANTE
 El ejemplo anterior coloca una llamada sin bloqueo a `fs.unlink()` dentro de la devolución de llamada de `fs.readFile()`, lo que garantiza el orden correcto de las operaciones.
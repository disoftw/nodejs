# El módulo path

Para trabajar con archivos y directorios, debe usar el módulo **path**. Los métodos **path** más útiles son los siguientes:
 - **path.basename(path[, ext])**
 - **path.unirse ([... paths])**

Puede usar el método `path.basename()` para obtener el nombre de archivo al que se llama. Veamos un ejemplo:

```js
const path = require('path');
const myPath = path.basename(__filename);
console.log(myPath);
```
:::tip
El **__filename** indica el nombre del archivo del módulo actual. El **__dirname** también es útil; indica el nombre del directorio del módulo actual.
:::

También puede usar el método basename() de la siguiente manera:

```js
const baz = path.basename('/foo/bar/baz.html');
console.log(baz); // baz.html
const baz2 = path.basename('/foo/bar/baz.html', '.html');
console.log(baz2); // baz
```
El método `path.join()` une todos los segmentos de ruta dados, luego normaliza la ruta resultante. Por ejemplo, si queremos obtener el archivo index.html de un usuario basado en el nombre de usuario, podemos usar:

```js
const path = require('path');
let userName = 'David';
const join = path.join('/users', userName, 'index.html');
console.log(join);
```
El método `join(`) es útil para crear rutas dinámicas basadas en la actividad del usuario.

:::warning IMPORTANTE
 Cuando se utiliza el método `basename()`, se recomienda utilizar `path.win32.basename()` para rutas consistentes en Windows y `path.posix.basename()` para rutas de coherencia en tanto Linux como Windows.
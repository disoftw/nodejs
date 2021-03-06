# Módulos

Los módulos en Node.js son como las bibliotecas JS. Además, en el sistema de módulos Node.js, cada archivo se trata como un **módulo separado**.

Node tiene muchos **módulos integrados** como **'http', 'fs', 'path', 'events'** y muchos más.

Para incluir módulos, necesitamos la función **require ('nombre')**, donde' nombre 'es el nombre del módulo. Se puede utilizar para importar módulos integrados, sus módulos creados y módulos externos (instalados a través de npm).

## Crear un módulo

Puede **exportar** sus propios módulos e importarlos en otro lugar de su proyecto.
La principal diferencia de un módulo con un archivo .js normal es que debe exportar lo que necesita de ese archivo (variables, objetos, funciones, propiedades, etc.).

Por ejemplo, creemos un módulo donde calcule el área del **círculo** y **cuadrado** y nombremos el módulo `area.js`. Vamos a usar **ES6**. Si no está familiarizado con él, puede aprenderlo [aquí](https://www.w3schools.com/Js/js_es6.asp).

```js
const { PI } = Math;
const circle = r => PI * r ** 2;
const square = a => a ** 2;
module.exports = { circle, square };
```

También podríamos exportarlos individualmente:

```JS
const {PI} = Math;
export.circle = r => PI * r ** 2;
export.square = a => a ** 2;
```

Para usar este módulo en otro archivo (app.js por ejemplo), debemos importarlo usando require ('./ area').

```js
const area = require('./area')
console.log(`Área del círculo: ${area.circle(4)}`)
console.log(`Área del cuadrado: ${area.square(4)}`)
```

Ahora puede ejecutar su archivo app.js utilizando **node app.js.**
Verá la salida:

**Área del círculo: 50.2654 ...**

**Área de la plaza: 16**

:::warning IMPORTANTE
Observe que estamos utilizando una **ruta relativa**, indicada con **"./"**. Su ruta puede cambiar si su módulo está ubicado en otro directorio.

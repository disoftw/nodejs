# Funciones de secuencia de escritura

Aquí cubriremos las funciones comunes de las secuencias de escritura:

`writable.write(chunk[, encoding][, callback])`: Este método escribe los datos proporcionados en la secuenica y llama a la devolución de llamada cuando no hay más datos para transmitir. Si se produce un error, es posible que no llame a la devolución de llamada, por lo que es bueno escuchar el evento '**error**'.

También tiene un valor de retorno, devuelve *verdadero* cuando el búfer interno es inferior al límite (highWaterMark). Se recomienda manejar el caso falso con el evento '**drain**'.

Este método se a visto en ejemplos anteriores, donde queríamos escribir datos en un archibo o enviarlos al cliente.

* **highWaterMark**: es el límite del búfer de flujo, que es **16k** por defecto. Puede acceder a su valor utilizando la propiedad '**writableHighWaterMark**'.

`writable.end([chunk][, encoding][, callback])`: Este método indica que no se escribirán más datos en 'wriable'. El fragmento opcional nos da la capacidad de escribir un último fragmento de datos antes de cerrar la secuencia. Si se proporciona la devolución de llamada, se escuchará en el evento '**finish**'. Llamar al método `write()` después del `final()` generará un error.

Veamos un ejemplo simple:

```js
const fs = require('fs');
const file = fs.createWriteStream('./myFile.txt');

file.write('A simple text. ', 'utf-8', () => {
  console.log('Write complete!');
});

file.end('The end text.', 'utf-8', () => {
  console.log('End complete!');
});
```

El resultado es un archivo llamado '**myFile.txt**' con el cuerpo: "Un texto simple. El texto final", y las salidas de devolución de llamada son: "¡Write complete! ¡End complete!".

---

El parámetro de codificación opcional se usa cuando pasamos una cadena. Algunas de las opciones de codificación válidas son **ascii**, **utf8/utf-8**, **base64**, **binary**, **hex** y pocos más, [listado aqui](https://stackoverflow.com/questions/14551608/list-of-encodings-that-node-js-supports/14551669#14551669).
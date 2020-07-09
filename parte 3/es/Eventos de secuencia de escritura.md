# Eventos de secuencia de escritura

Las secuencias de escritura poseen muchos eventos y funciones potentes. Entre los más comunes se encuentran:

**error**: Este evento se emitirá si se produce un error durante la escritura o canalización de datos.

**finish**: Este evento será emitido después de que se haya llamado al método `end()`.

**close**: Indica que no se emitirán más eventos. Se emite cuando la secuencia y cualquiera de sus recursos se han cerrado.

**pipe**: Se emite cuando se llama al método `pipe()` en una secuencia legible, es decir, alimentará lo que se puede escribir de lo legible.

**unpipe**: Este evento es el opuesto del evento 'pipe', se emitirá cuando se llame al metodo `unpipe()` en una secuencia legible. Esto también se emitirá cuando una secuencia de escritura escriba un error en la 'pipe'.

**drain**: Si el evento `write()` devuelve falso, el evento 'drain' se emitirá cuando esté nuevamente listo para escribir. Esto puede deberse a diferentes anchos de banda y velocidades de escritura y lectura.

Se agregarán los eventos **finish** y **close** al ejemplo anterior de *'secuencias de escritura y lectura'*:

```js
const fs = require('fs');
const file = fs.createWriteStream('./big-file.txt');

for(let i = 0; i <= 1000000; i++) {
  file.write('...');
}

file.on('close', () => {
  console.log('OnClose'); // 3
});
file.on('finish', () => {
  console.log('OnFinish'); // 1
});

file.end(() => {
  console.log('end'); // 2
});
```

Si se ejecuta el código, verá que el orden de las salidas es la siguiente:
1. OnFinish
2. end
3. OnClose

---
*Observa este caso de estudio de evento de flujos de escritura:*

## Eventos de secuencia de escritura: caso de estudio en js

Repasaremos un ejemplo en el que usaremos el evento '**drain**' y veremos como funciona. Modifiquemos el ejemplo anterior para escuchar al evento '**drain**' y contar cuantas veces se llamará:

```js
const fs = require('fs');
const file = fs.createWriteStream('./big-file.txt');

const str = 'This is just a text that we are going to write to the big-file.txt one million times. So it becomes a big file (around 150MB) for Stream example purposes.\n';

const writeOneMillionTimes = (writeStream, data, callback) => {
  let i = 1000000;
  drain_counter = 0;
  const writer = () => {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time! So, it should call the callback.
        writeStream.write(data, callback);
        writeStream.end(() => {
          console.log('drain_counter: ' + drain_counter);
        });
        console.log('drain_counter: ' + drain_counter);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writeStream.write(data);
      }
    } while (i > 0 && ok);

    if (i > 0) {
      // had to stop early! write some more once it drains
      writeStream.once('drain', writer); // calls the function when drain got emitted
      drain_counter++;
    }
  }
  writer();
}

writeOneMillionTimes(file, str, () => {
  console.log('Task complete');
});
```

La funcionalidad del ejemplo anterior es similar a la anterior: estamos transmitiendo datos al archivo, sin embargo, en este ejemplo, estamos usando el evento '**drain**' donde espera hasta que el buffer del escritor se vacié y emita el evento '**drain**'. Después de recibir la emisión, nuevamente llamamos a la función de escritor y comenzamops a escribir datos en el archivo.

*También contamos cuántas veces se emitió el evento '**drain**' e imprimimos al final.*

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

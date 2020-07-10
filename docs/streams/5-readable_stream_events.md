# Eventos de secuencia de lectura

**Las secuencias de lectura** nos permiten leer datos de una fuente (la fuente puede ser un archivo, una conexión o cualquier proveedor de datos).

Las secuencias de lectura tienen dos modos, **flowing** y **pause**, que afectan la forma en que podemos usarlos:

- **flowing**: En este modo, los datos se leen del sistema automáticamente y se proporcionan a una aplicación lo más rápido posible mediante eventos (EventEmitters).
- **paused**: En este modo, se debe de llamar explícitamente al método `read()` para leer los datos de la secuencia (una porción de datos). Use el método `pause()` para pausar la transmisión.

La lectura no generará datos hasta que los datos proporcionados sean **consumidos o ignorados**. Si el mecanismo de consumo está descativado o eliminado, la lectura intentará dejar de generear los datos.

Aquí cubriremos los eventos comunes de las secuencias de lectura:

'**close**': Este evento indica que no se emitirán más eventos. Se emite cuando la secuencia y cualquiera de sus recursos se han cerrado.

'**data**': Este evento se emite cuando la secuencia proporciona datos al consumidor. Esto suscede cuando hay un detector de eventos de 'data' disponible, el flujo se cambia a **flowing mode** ya sea por los métodos `pipe()` o `resume()`, o cuando se llama al método `read()` con los datos disponibles.

_supongamos que tenemos un archivo con tamaño de aproximadamente 150 MB_:

```js
const fs = require('fs')
const readable = fs.createReadStream('./file.txt')
readable.on('data', chunk => {
  console.log(`Received ${chunk.length} bytes of data.`)
})
```

**_readable_** escuchará el evento 'data' y llamará a la devolución de llamada cuando se emita.

- _Si se adjunta un detector de eventos de 'data' a una secuencia que no ha sido pausada manualmente, la secuencia cambiará al modo de flujo y los datos se pasarán cuando esté disponible_

'**end**': Este evento se emitirá cuando no haya más datos disponibles de la transmisión (totalmente consumidos).

_Por ejemplo, agreguemos la siguiente parte al último fragmento de código_:

```js
...
readable.on('end', () => {
  console.log('There is no more data.');
});
```

Además del oyente de 'data' anterior, este también escuchará el evento 'end' y activará la devolución de llamada cada vez que se emita el 'final'.

---

El evento 'error' se puede emitir en cualquier momento. Las razones de este evento son si el sistema no puede generar datos o si hay una porción de datos no válida.

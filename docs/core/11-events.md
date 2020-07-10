# Eventos

Node.js está construido sobre **arquitectura controlada por eventos** donde los objetos más importantes son **emisores** y **oyentes**. Por ejemplo, una función **emite** un evento y un **oyente** capta ese evento.

Node.js incluye eventos de módulo integrados que proporcionan la clase **EventEmitter** con la que puede crear, disparar y escuchar los eventos.
Para utilizarlo, necesita el módulo de importación **'events'**.

Cada método de un objeto EventEmitter puede recibir diferentes argumentos:
- emisor.**emit(eventName [, ... args])**
- emisor.**on(eventName, listener)**

Creemos un **detector de eventos** que ejecutará la función de devolución de llamada cuando se active un evento 'AAAIMX'.

```js
const {EventEmitter} = require('events'); 
const eventEmitter = new EventEmitter();
eventEmitter.on('AAAIMX', () => {
    console.log('AAAIMX occurred!');
});
eventEmitter.emit('AAAIMX');
```

:::tip 
El método **emit()** activa el evento, donde el método **on()** escucha el evento.
Podemos agregar otro evento en el mismo objeto. Por ejemplo:
:::

```js
...
eventEmitter.on('AAAIMX', () => {
    console.log('AAAIMX occurred!');
});
eventEmitter.emit('AAAIMX');

eventEmitter.on('mySecondEvent', () => {
    console.log('mySecondEvent occurred!');
});
eventEmitter.emit('mySecondEvent');
```
Puede agregar parámetros a su emisor y ponerlos en su oyente. Por ejemplo,

```js
...
eventEmitter.on('Person', (name, age) => {
    console.log(`I'm ${name} and I'm ${age} years old.`);
});
eventEmitter.emit('Person', 'David', '28');
```
También puede obtener la lista de todos los nombres de eventos de un solo eventEmitter utilizando el emisor. **eventNames()**.
Por ejemplo, en el ejemplo anterior donde tuvimos dos eventos, eventNames() devolverá lo siguiente:

```js
...
eventEmitter.on('AAAIMX', () => { ... });
eventEmitter.emit('AAAIMX');

eventEmitter.on('mySecondEvent', () => { ... });
eventEmitter.emit('mySecondEvent');

console.log(eventEmitter.eventNames()); // [ 'AAAIMX', 'mySecondEvent' ]
```
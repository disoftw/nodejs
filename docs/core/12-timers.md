# Temporizadores

El módulo de temporizador expone una API global para programar funciones que se llamarán en algún momento en el futuro. No es necesario usar require (temporizadores) porque las funciones del temporizador son globales.

Node.js y las funciones del temporizador del navegador web implementan una API similar; sin embargo, Node.js usa el bucle de eventos para lograrlo.

Un temporizador en Node.js llamará a una función dada después de un determinado **período de tiempo**. Hay tres funciones para configurar los temporizadores:

**setImmediate(callback[, ... args])**
Programa la ejecución "inmediata" de la **devolución de llamada** después de las devoluciones de llamada de eventos de E / S.
Para simplificar el ejemplo, no usaremos una operación de E/S aquí:

```js
setImmediate((name, age) => {
  // Usually the heavy operations go here, such as I/O events.
  console.log(`My name is ${name} and I'm ${age} years old.`);
}, "David", 28); // My name is David and I'm 28 years old.
```
**setInterval(callback, delay[, ... args])**
Programa la ejecución repetida de **devolución de llamada** cada **retraso** milisegundos.

```js
setInterval((name, age) => {
  console.log(`My name is ${name} and I'm ${age} years old.`);
}, 1000, "David", 28);
```
El código anterior imprimirá la salida cada 1 segundo, infinitamente.

**setTimeout(callback, delay[, ...args])**
Programa la ejecución de una única **devolución de llamada** después de **retraso** en milisegundos.
No hay garantía de que la devolución de llamada se active exactamente después del tiempo especificado; en cambio, la devolución de llamada se llamará lo más cerca posible del tiempo especificado.

```js
setTimeout((name, age) => {
  console.log(`My name is ${name}, and I'm ${age} years old.`);
}, 1000, "David", 28);
```
El código anterior esperará 1 segundo (1000 ms) y luego llamará a la devolución de llamada, que imprimirá la salida:

*Mi nombre es David y tengo 28 años.*

:::warning IMPORTANTE
El retraso está en **milisegundos**, y varía de 1 a 2147483647. Cualquier cosa fuera de ese rango se establecerá en 1.
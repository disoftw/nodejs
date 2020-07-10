# Timers


The timer module exposes a global API for scheduling functions to be called at some point in the future. There is no need to use require(timers') because the timer functions are global.

Node.js and Web Browser timer functions implement a similar API; however, the Node.js uses the Event Loop to achieve that.

A timer in Node.js will call a given function after a certain **period of time**. There are three functions to set the timers:

**setImmediate(callback[, ...args])**
Schedules the "immediate" execution of the **callback** after I/O events' callbacks.
For simplicity of the example, we will not use an I/O operation here:

```js

setImmediate((name, age) => {
  // Usually the heavy operations go here, such as I/O events.
  console.log(`My name is ${name} and I'm ${age} years old.`);
}, "David", 28); // My name is David and I'm 28 years old.

```


**setInterval(callback, delay[, ...args])**
Schedules repeated execution of **callback** every **delay** milliseconds.

```js

setInterval((name, age) => {
  console.log(`My name is ${name} and I'm ${age} years old.`);
}, 1000, "David", 28);

```
The code above will print the output every 1 second, infinitely.

**setTimeout(callback, delay[, ...args])**
Schedules execution of a one-time **callback** after **delay** milliseconds.
There is no guarantee that the callback will be triggered exactly after the specified time; instead, the callback will be called as close as possible to the time specified.

```js

setTimeout((name, age) => {
  console.log(`My name is ${name}, and I'm ${age} years old.`);
}, 1000, "David", 28);

```


The code above will wait for 1 second (1000 ms) and then will call the callback, which will print the output:
// My name is David, and I'm 28 years old.

> The delay is in **milliseconds**, and it ranges from 1 to 2147483647. Anything outside that range will be set to 1.
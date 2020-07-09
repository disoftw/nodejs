# Events

Node.js is built on **event-driven architecture** where the most important objects are **emitters** and **listeners**. For example, a function **emits** an event and a **listener** catches that event.

Node.js includes built-in module events which provide the **EventEmitter** class with which you can create, fire, and listen to the events.
In order to use that you need the import 'events' module.

Each method of an EventEmitter object can receive different arguments:
- emitter.**emit(eventName[, ...args])**
- emitter.**on(eventName, listener)**

Let's create an **event listener** which will execute the callback function when a 'SoloLearn' event is fired.

```js

const {EventEmitter} = require('events'); 
const eventEmitter = new EventEmitter();

eventEmitter.on('SoloLearn', () => {
    console.log('SoloLearn occurred!');
});
eventEmitter.emit('SoloLearn');

```
> The **emit()** method fires the event, where the **on()** method listens to the event.
We can add another event on the same object. For example:

```js

...
eventEmitter.on('SoloLearn', () => {
    console.log('SoloLearn occurred!');
});
eventEmitter.emit('SoloLearn');

eventEmitter.on('mySecondEvent', () => {
    console.log('mySecondEvent occurred!');
});
eventEmitter.emit('mySecondEvent');

```
You can add parameters to your emitter and get them in your listener. For example,

```js

...
eventEmitter.on('Person', (name, age) => {
    console.log(`I'm ${name} and I'm ${age} years old.`);
});
eventEmitter.emit('Person', 'David', '28');

```

You can also get the list of all the event names of a single eventEmitter by using emitter.**eventNames()**.
For example, in the example above where we had two events, eventNames() will return the following:

```js

...
eventEmitter.on('SoloLearn', () => { ... });
eventEmitter.emit('SoloLearn');

eventEmitter.on('mySecondEvent', () => { ... });
eventEmitter.emit('mySecondEvent');

console.log(eventEmitter.eventNames()); // [ 'SoloLearn', 'mySecondEvent' ]

```
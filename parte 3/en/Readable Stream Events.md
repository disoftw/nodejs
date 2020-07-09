# Readable Stream Events

**Readable Streams** let you read data from a source (the source can be a file, a connection, or any data provider).

Readable Streams have two modes, **flowing** and **paused**, which affect the way we can use them:

 - **flowing**: In this mode, data is read from the system automatically and provided to an application as fast as possible using events (EventEmitters).
 - **paused**: In this mode, the `read()` method must be called   explicitly to read the data from the stream (a chunk of data). Use the `pause()` method to pause the stream.

*Readable will not generate data until the provided data is **consumed or ignored**. If the consuming mechanism is disabled or removed, the Readable will attempt to stop generating the data.*

Here, we will cover the common events of Readable Streams:

'**close**': This event indicates that no more events will be emitted. It is emitted when the stream and any of its resources have been closed.

'**data**': This event is emitted when the stream gives data to the consumer. This happens when there is an available 'data' event listener, the stream is switched to **flowing mode** either by the `pipe()` or `resume()` methods or when the `read()` method is called with available data.

Suppose we have a file with a size of approximately 150MB:

```js
const fs = require('fs');
const readable = fs.createReadStream('./file.txt');
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});
```

*readable* will listen to the 'data' event and call the callback when it's emitted.

*If you attach a 'data' event listener to a stream that has not been paused manually, the stream will be switched to flowing mode and the data will be passed when it becomes available.*

'**end**': This event will be emitted when there is no more data available from the stream (entirely consumed).
For example, let's add the following part to the last code snippet:

```js
...
readable.on('end', () => {
  console.log('There is no more data.');
});
```

In addition to the 'data' listener above, this one will also listen to the 'end' event and trigger the callback whenever the 'end' is emitted.

*The 'error' event can be emitted at any time. Reasons for this event are if the system fails to generate data, or if there is an invalid chunk of data.*
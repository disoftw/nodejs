# Readable stream functions

Let's go over the important functions and see what they are used for.

`readable.read([size])`: This method pulls some data out of the internal buffer and returns it. If there is no data available to be read, null will be returned. If the optional size argument is not specified, all of the data contained in the internal buffer will be returned. In case of returning a chunk of data, the 'data' event will also be emitted.

The `read()` method should only be called on Readable streams operating in paused mode. In **the flowing mode**, `read()` is called automatically until the internal buffer is fully drained.

`readable.setEncoding(encoding)`: This method sets the character encoding for data read from the Readable stream. By default, there is no encoding. Setting an encoding causes the stream to return the data as a string.

`readable.pause()`: This method will stop emitting the 'data' events in the flowing mode and switches to the pause mode. The `isPaused()` method returns the status of the current stream. If we call the `pause()` method, this will return true, otherwise false.

`readable.resume()`: This method causes a manually-paused Readable stream to resume emitting 'data' events, switching the stream into the flowing mode (from the paused mode). After calling this method, the `isPaused()` will return false.

```js
const fs = require('fs');
const readable = fs.createReadStream('./file.txt');
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  console.log(`isPaused(): ${readable.isPaused()}`); // false
  readable.pause();
  console.log(`isPaused(): ${readable.isPaused()}`); // true
  console.log('There will be no data for 2 seconds.');
  setTimeout(() => {
    console.log('Data will start flowing again.');
    readable.resume();
    console.log(`isPaused(): ${readable.isPaused()}`); // false
  }, 2000);
});

readable.on('end', () => {
  console.log('There is no more data.');
});
```

---

*Again, we used the same base code as in the previous lesson and added the pause(), isPaused(), and resume() methods.*

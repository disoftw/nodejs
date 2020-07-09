# Writable Stream Functions

Here we will cover the common functions of Writable Streams:

`writable.write(chunk[, encoding][, callback])`: This method writes the provided data to the stream and calls the callback when there is no more data to stream. If an error occurs, it may not call the callback, so it is good to listen on the '**error**' event.
It also has a return value which returns true when the internal buffer is less than the limit (highWaterMark). It is recommended to handle the false case with the '**drain**' event.

You already saw this method few times in our previous examples, where we wanted to write a data to the file or send it to the client.

* **highWaterMark** is the stream buffer limit which is **16K** by default. You can access its value by using **writableHighWaterMark** property.

`writable.end([chunk][, encoding][, callback])`: This method indicates that no more data will be written to the Writable. The optional chunk gives us the ability to write one last chunk of data before closing the stream. If the callback is provided, it will listen on the '**finish**' event. Calling the write() method after the end() will raise an error.

Let's see a simple example:

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

The output is a file named '**myFile.txt**' with the body: "A simple text. The end text." and the callbacks outputs are: "Write complete! End complete!"

---

The optional encoding parameter is used when we are passing a string. Some of the valid encoding options are **ascii**, **utf8/utf-8**, **base64**, **binary**, **hex** and few more, [listed here](https://stackoverflow.com/questions/14551608/list-of-encodings-that-node-js-supports/14551669#14551669).

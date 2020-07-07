# Asynchronous vs Synchronous File Operations

Now that you learned what are **modules** and how the **methods** of the **fs** module work, it is the time to understand the difference between **asynchronous** and **synchronous** methods. Usually, it is referred to as **blocking** or **non-blocking** codes.
 
**Blocking** is when the execution must wait until a non-JavaScript operation is completed. This happens because the event loop is unable to continue running JavaScript while a blocking operation is happening. Usually, the I/O operations are the blocking operations.
Blocking methods execute **synchronously** and non-blocking methods execute **asynchronously**.

All of the I/O methods in the Node.js provide asynchronous versions, which are non-blocking, and accept **callback functions**. Some methods also have blocking versions, which have names that end with "Sync".

Let's see how we should use the Asynchronous and Synchronous of a already familiar method, **readFile()**. The synchronous version:

```js

const fs = require('fs');
const data = fs.readFileSync('/file.txt'); // blocks here until file is read
console.log(data);
someWork(); // will run after console.log

```
And the asynchronous version:

```js

const fs = require('fs');
fs.readFile('/file.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});
someWork(); // will run before console.log

```
In the first example above, console.log will be called before someWork(). In the second example, fs.readFile() is **non-blocking**, so JavaScript execution can continue and someWork() will be called first. The ability to run someWork() without waiting for the file read to complete is a key design choice that allows for higher throughput.

Mixing blocking and non-blocking code is dangerous. For example, if you try to read a file asynchronously and remove it synchronously, you may end up first deleting the file and then trying to read it. For example:

```js

const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.unlinkSync('/file.md');

```
Where the fully asynchronous version would be:

```js

const fs = require('fs');
fs.readFile('/file.md', (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data);
  fs.unlink('/file.md', (unlinkErr) => {
    if (unlinkErr) throw unlinkErr;
  });
});

```
> The example above places a non-blocking call to fs.unlink() within the callback of fs.readFile(), which guarantees the correct order of operations.


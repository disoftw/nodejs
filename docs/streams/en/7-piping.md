# Piping

Piping is a useful mechanism that allows you to read data from the source and write to the destination without managing the flow yourself.

The following functions of the Readable Stream are used in piping.

`readable.pipe(destination[, options])`: This method attaches a Writable stream to the readable, automatically switches into flowing mode, and pushes all of its data to the connected Writable. The Readable stream will never stream faster than the Writable stream can consume.

*You can attach multiple Writable Streams to a single Readable Stream.*

`readable.unpipe([destination])`: This method detaches a Writable stream previously attached using the pipe() method. If the destination is not specified, then all pipes are detached.

Here's a basic piping example:

```js
const fs = require('fs');
const readable = fs.createReadStream('./big-file.txt');
const writable = fs.createWriteStream('newFile.txt');
readable.pipe(writable);
```

We simply read the content of the big-file.txt and write it into newFile.txt.

In one of the previous lessons (Writable and Readable streams) demonstrating how we should avoid buffer overflows, we used the piping to send the user big file via HTTP response:

```js
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big-file.txt');
  src.pipe(res);
});

server.listen(3000);
```

Piping is a powerful tool to ease the streaming process and avoid unexpected problems with manually handling the data.

## Chaining

In some cases, it is even possible to chain the pipes together. For example, there is a module in Node.js called zlib, which provides us with compression functionality implemented using Gzip. To use zlib, we need to require('zlib');

Now let's see an example, where we will try to reduce the size of the file big-file.txt:

```js
const fs = require('fs');
const zlib = require('zlib');
const input = fs.createReadStream('big-file.txt');
const zip = zlib.createGzip();
const output = fs.createWriteStream('small-file.txt.gz');
input.pipe(zip).pipe(output);
```

---

The `pipe()` method returns a reference to the output stream, making it possible to set up chains of piped streams.

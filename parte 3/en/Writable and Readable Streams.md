# Writable and Readable Streams

Let's see an example of how streams used and understand why they are vital to Node.js applications. Let's start by using a stream for creating a big file and learn why they are useful

```js
const fs = require('fs');
const file = fs.createWriteStream('./big-file.txt');

for(let i = 0; i <= 1000000; i++) {
  file.write('This is just a text that we are going to write to the big-file.txt one million times. So it becomes a big file (around 150MB) for Stream example purposes.\n');
}
file.end();
```

The '**fs**' module can be used to **read** from and **write** to files using a **stream** interface. In the example above, we are using a for loop to write to 1 million lines through a Writable stream to **big-file.txt**.

Now we need to serve the big-file.txt:

```js
const server = require('http').createServer();
const fs = require('fs');

server.on('request', (req, res) => {
  fs.readFile('./big-file.txt', (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(3000);
```

When the server gets a request, it will try to serve the mentioned file asynchronously using the fs.readFile() method. The problem is the amount of memory it will consume. It will put the content of the file in the computer's memory before assigning it to the **response** object. By using the fs.createReadStream() method we can pipe the stream to the response object.

```js
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big-file.txt');
  src.pipe(res);
});

server.listen(3000);
```

When a client asks for a big file, we stream it one **chunk** at a time, which means we are not putting the whole file into the RAM all at once.

---

 With the default settings, you can't serve a file bigger than the default buffer limit in Node (2GB) without using streams

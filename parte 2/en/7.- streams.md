# Streams

**Streams** are the most powerful tool to work with when you have a large amount of data. They are similar to strings or arrays, but the difference is that streams might **not be available all at once** (memory size or network bandwidth issues). So, streams load the data in **chunks** once at a time. But handling big data is not the only use case for them; you can also use them for **piping** the data into other commands (similar to piping in Linux).

Most of the Node.js applications, even a simple APIs such as the Creating Web Server, use streams in some way. For example, **req** and **res** are streams. **req** is an http.IncomingMessage, which is a **Readable Stream**; **res** is an http.ServerResponse, which is a **Writable Stream**.

An example of creating a Writable Stream is the **fs.createWriteStream()** method from the 'fs' module. Writable streams expose methods such as **write()** and **end()** that are used to write data onto the stream.

A good example of creating a Readable Stream is using the fs.createReadStream() method. Readable streams use the EventEmitter to notify application code when data is available to be read from the stream. That available data can be read from the stream in multiple ways, which will be discussed later.

> Both **Writable** and **Readable** streams use the **EventEmitter** in various ways to communicate the current state of the **stream**.
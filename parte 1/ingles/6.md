## Creating Web Server js

In this lesson, we are going to create an HTTP server, start it, and see the response in the browser. We are going to use **ES6**. If you are not familiar with it, you can learn it here.

To use the HTTP server and client, we must use the **http** core module, set the port number we want to connect, and define the host we are going to use.

```JS
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
```


Let's create the server:

```JS
...
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});
```

...


Here we create the server, setting the status code of response to 200, give it a correct header type, and sending a plain text to the client.

So far we created the server, but it is not **listening** to the host and port. To set that up:

```JS

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

The server listens to the port and host, where the callback is the console.log returning the data into the terminal.

Now we can run the server by using the command: **node app.js.**
Inside the browser, visit **http://localhost:3000** , and you will see the message **'Hello, World!'**. And you will see **"Server running at http://127.0.0.1:3000/"** in the terminal.

>So far we haven't used the package.json or node_modules, but it is good practice to have them from the beginning because we are always going to need them.
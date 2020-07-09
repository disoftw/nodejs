## The fs Module js

One of the most important modules in Node.js is **'fs'**. It provides us with file I/O. To start using it, we need to call require('fs'). All the 'fs' methods have **asynchronous** and **synchronous** forms.

The most common tasks of the **fs** module are to read, create, update, delete, and rename files.

To read files, use the **fs.readFile()** method of the fs module.

```JS
fs.readFile('/home/file', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```


There are several options to create a file. Each of them performs a slightly different task. The method fs.writeFile() asynchronously writes data to a file, replacing the file if it already exists (**data** can be a string or a buffer).

```JS
fs.writeFile('file.txt', 'Hello World', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 
```

>Note that it is unsafe to use fs.writeFile multiple times on the same file without waiting for the callback.


The method **fs.appendFile()** asynchronously appends data to a file, creating the file if it does not yet exist.

```JS
fs.appendFile(file.txt', 'Text/Data to append', (err) => {
  if (err) throw err;
  console.log('The new text was appended to file!');
});
```

>All the methods and examples above are asynchronous. If you need them to be synchronous, add the Sync keyword to the method names, such as **fs.readFileSync(), fs.appendFileSync()**, etc.
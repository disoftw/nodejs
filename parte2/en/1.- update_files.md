# Update Files

Another powerful method for file manipulation is the **fs.open()** method.
```js

fs.open(path, flags[, mode], callback)

```
This method can take different flags which change its behavior. Here are some of the flags that **fs.open()** may take:
 - **'r'**: Open file for reading. An exception occurs if the file does not exist.
 - **'r+'**: Open file for reading and writing. An exception occurs if the file does not exist.
 - **'w'**: Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
 - **'w+'**: Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
 - **'a'**: Open file for appending. The file is created if it does not exist.
 - **'a+'**: Open file for reading and appending. The file is created if it does not exist.

> The **'w'** and **'a'** flags also can be used with an **'x'** flag such as **'wx+'** or **'ax'**. These operate similarly to the original flag but **fail if the file exists**.

The example below demonstrates how to append a file using both fs.open() and fs.appendFile():

```js
fs.open('file.txt', 'a', (err, fd) => {
  if (err) throw err;
  fs.appendFile(fd, 'Text/Data to append', 'utf8', (err) => {
    fs.close(fd, (err) => {
      if (err) throw err;
    });
    if (err) throw err;
  });
});
```
> If you need the synchronous version, use the **fs.openSync()** method.

To rename files, use the **fs.rename()** method.

```js
fs.rename('/home/file1', '/home/file2', (err) => {
  if (err) throw err;
  console.log('rename completed');
});
```



# The path Module


To work with files and directories, you need to use the **path** module. The most useful **path** methods are the following:
 - path.**basename(path[, ext])**
 - path.**join([...paths])**

You can use the **path.basename()** method to get the file name that it is called. Let's see an example:

```js

const path = require('path');

const myPath = path.basename(__filename);
console.log(myPath);

```
> The **__filename** indicates the file name of the current module. The **__dirname** is useful too; it indicates the directory name of the current module.

You can also use the basename() method in the following way:

```js

const baz = path.basename('/foo/bar/baz.html');
console.log(baz); // baz.html
const baz2 = path.basename('/foo/bar/baz.html', '.html');
console.log(baz2); // baz

```
The **path.join()** method joins all given path segments together, then normalizes the resulting path. For example, if we want to get a user's index.html file based on the username, we can use:

```js

const path = require('path');

let userName = 'David';
const join = path.join('/users', userName, 'index.html');
console.log(join);

```
The join() method is useful to create dynamic paths based on the user's activity.

> When using the **basename()** method, it is recommended to use **path.win32.basename()** for consistent paths in Windows and **path.posix.basename()** for consistency paths in both Linux and Windows.

## Core Modules js

The core modules include bare minimum functionalities of Node.js, they are compiled into its binary distribution and load automatically when Node.js starts. 

Unlike other modules, they do not have to be manually installed. The core module must be imported first to use it in the application.

```JS
const data = require("core-module-name");
```


Here's a list of some of Node.js core modules:
 
 - **assert:** provides a set of assertion tests
 - **buffer:** contains functionality to handle binary data
 - **dns:** for DNS lookups and name resolution functions
 - **events:** provides a way of working with events
 - **fs:** includes functionality to work with files
 - **http:** includes functionality to create a Node.js HTTP server
 - **querystring:** provides URL query strings handling functionality

>The os module provides information about the computer's operating system.
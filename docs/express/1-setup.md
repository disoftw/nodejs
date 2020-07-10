# Configuración del proyecto Express.js

**Express.js** es un framework popular escrito en JavaScript. El trabajo de este módulo es facilitar el proceso de desarrollo y de ayudar a configurar su API.

Se puede instalar usando: 

    $ npm install express --save

Para usarlo en un módulo, debe importarlo y llamarlo como un método, por ejemplo:
```js
const express = require('express');
const app = express();
```

Es posible escribir una API sin usar ningún framework (Node.js puro). Sin embargo, se recomienda utilizar un framework estable para tener una API fácil de mantener que proporcione un código repetitivo mínimo.

Para configurar un proyecto, cree un directorio e inicialice un proyecto de node (**npm init**). Puede dejar las opciones como están durante la inicialización y, si es necesario, cambiarlas más tarde desde el archivo **package.json**.

Al final, nuestro proyecto tendrá la estructura que se describe a continuación.
```
.
├── api
│      ├── middleware
│      │      ├── check-auth.js
│      │      └── query-validator.js
│      ├── models
│      │      ├── code.js
│      │      └── user.js
│      └── routes
│               ├── codes.js
│               └── users.js
├── app.js
├── package.json
└── server.js
4 directories, 9 files
```

En el directorio de su proyecto, escriba **npm install express --save** en la terminal para instalar el framework Express. Luego agregue los archivos **app.js** y **server.js** en el directorio principal del proyecto.


:::warning
 Verifique su archivo _package.json_ después de ejecutar el comando anterior para verificar que se instaló el módulo de express. Tenga en cuenta que también se crea el directorio _node_modules_.

# MongoDB Model

Toda la configuración está hecha. Tenemos un MongoDB en funcionamiento y Mongoose está conectado a nuestra base de datos. ¡Ahora tenemos que volver a nuestro proyecto y comenzar a escribir JavaScript nuevamente!

Para poder almacenar datos en nuestra base de datos, necesitamos modelos Mongoose. Debe definir cómo va a almacenar objetos en la base de datos, luego crear un modelo (Objeto JavaScript) basado en eso. Este modelo tendrá algunas funciones que lo ayudarán a agregar, actualizar, eliminar, fusionar, buscar, ordenar y realizar muchas más operaciones en ese conjunto de datos.

:::tip
Puedes leer más sobre los modelos en el oficial [MongoDB](https://docs.mongodb.com) y [Mongoose](http://mongoosejs.com/docs/guide.html) documentación.
:::

Ahora, recordemos nuestra estructura de proyecto desde [aquí](). Necesitamos agregar el directorio "modelos" en nuestro proyecto para que se vea así:
 
```
.
├── api
│      ├── models
│      │      ├── code.js
│      │      └── user.js
│      └── routes
│               ├── codes.js
│               └── users.js
├── app.js
├── package.json
└── server.js
3 directories, 7 files
```

Un modelo es solo un objeto JavaScript que se construye sobre Mongoose. Comencemos con el archivo user.js. En primer lugar, debe requerir la mangosta. A continuación necesitamos el esquema:

```JS
// models/user.js
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
});
```
Acabamos de pasar un objeto JavaScript al esquema del método, donde deberíamos definir cómo se ve nuestro modelo.
Agreguemos ID, correo electrónico, nombre, edad y país:

```JS
// models/user.js
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: String,
  name: String,
  age: Number,
  country: String
});
```
>Es una convención usar _id. Además, el mongoose.Schema.Types.ObjectId genera ID únicos aleatorios para cada documento.


Ahora que tenemos el esquema, necesitamos crear un modelo y exportarlo para poder usarlo en otros módulos.

La función modelo toma dos argumentos: primero, el nombre que vamos a usar internamente, y segundo, el esquema que creamos:

```JS
// models/user.js
module.exports = mongoose.model('User', userSchema);
```

:::warning INFO
El esquema es como el diseño del objeto que queremos usar, en el que el modelo es el objeto mismo basado en ese esquema.
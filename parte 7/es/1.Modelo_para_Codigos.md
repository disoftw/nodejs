# Modelo para el código
Necesitamos crear un nuevo modelo para el código, como el modelo que creamos para el usuario.
En general, Es similar excepto por el Schema en si.
```js
  //models/code.js
  const mongoose = require('mongoose');
  
  const codeSchema = mongoose.Schema({
       _id: mongoose.Schema.Types.ObjectId,
       language: String,
       body: Striing
  });
  
  module.exports = mongoose.model('Code', codeSchema);
```
Esto funcionará bien por ahora. Sin embargo, necesitamos alguna relación en nuestro schema para vincular el documento a un usuario.
Entonces, cómo sabremos que el código es creado por qué usuario ¿(el dueño del código)?

Para eso necesitamos agregar un nuevo campo en nuestro schema , el cual tomará el ID del usuario referenciado en el modelo de usuario.
```js
 user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
```
> Si estas usando demasiadas relaciones en tu schema, entonces debes cambiarte a bases de datos basados en SQL como MySQL ó PostgreSQL

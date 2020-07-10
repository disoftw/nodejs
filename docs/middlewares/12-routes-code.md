# Códigos de rutas

Por ahora, hemos completado nuestra ruta de usuarios ficticios, construyamos la ruta de códigos a partir de lo que hemos aprendido hasta ahora. Puede volver a la lección introductoria para ver los requisitos de la ruta
**/codes**.

:::tip
 Intente implementar **/codes** ruta usted mismo antes de continuar con la lección. No olvide que además de /routes/codes.js, también debe realizar algunos cambios en el archivo app.js para manejar todas las solicitudes de ruta **/codes**.
:::
Si no tiene el archivo /api/routes/codes.js en su proyecto, créelo y siga las instrucciones a continuación.

```js
// codes.js
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {})
router.post('/', (req, res, next) => {})
router.get('/:codeID', (req, res, next) => {})
router.put('/:codeID', (req, res, next) => {})
router.patch('/:codeID', (req, res, next) => {})
router.delete('/:codeID', (req, res, next) => {})

module.exports = router
```

Y aquí están los cambios en el archivo **app.js**:

```js
// app.js
...
const codesRoutes = require('./api/routes/codes');
...
app.use('/codes', codesRoutes);
```

:::warning
 Por ahora, tanto los usuarios como los códigos son muy similares. Pero cuando comencemos a usar la base de datos, verá las diferencias.

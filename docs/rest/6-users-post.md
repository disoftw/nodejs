# Ruta de usuarios (POST) js

Ahora que tenemos la configuración necesaria en el archivo app.js, podemos agregar tantas rutas como queramos en el archivo users.js. Entonces, escribamos el manejador de solicitud (handler) **POST**.

Es similar a la solicitud GET con algunas diferencias menores:
```js
// users.js
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request of the /users'
    });
}); 
```
No olvide exportar su ruta para que el archivo app.js pueda acceder a su archivo users.js:
```js
// users.js
module.exports = router;
```

Ahora que tenemos nuestras rutas **GET** y **POST**, intentemos enviar una solicitud en Postman.
No olvide reiniciar su servidor para aplicar los cambios. Para eso, puede matar el servidor presionando la combinación de teclas Ctrl+C e iniciarlo nuevamente con el comando ($ **node server.js**).

**Solicitud GET: localhost:3000/users**

**Solicitud POST: localhost:3000/users**

Tenga en cuenta que ya no puede enviar una solicitud a la **ruta raíz** (localhost:3000) ya que no hay controladores para eso. Además, como se especifican las rutas de los usuarios, solo aceptará la solicitud GET y POST y fallará (devolverá un error) en cualquier otro tipo.
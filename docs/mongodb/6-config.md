# Agregar configuración de base de datos

Entonces, ahora que aprendió qué es MongoDB, aprendió sobre Mongoose e instaló el servidor **mongod** en su computadora, es hora de agregarlo a nuestro proyecto.

En primer lugar, verifique si su servidor mongod está [ejecutándose](). Luego, [instalar]() el **paquete de mangosta**. Finalmente, conecte la Mangosta al servidor mongod. Necesitamos configurar la conexión en nuestro archivo app.js. Entonces, primero impórtelo y luego configúrelo de la siguiente manera (puede agregarlo justo después de importar las rutas):

```JS

// app.js
mongoose.connect('mongodb://127.0.0.1:27017/solodb', (err) => {
  if (err) throw err;
  console.log('Successfully connected to .');
});

```

Utilizamos el método de conexión y pasamos la URL de la base de datos. Finalmente, usamos la devolución de llamada para arrojar el error en caso de falla y devolver un mensaje de éxito de lo contrario.

> Ahora, si inicia su servidor, recibirá el mensaje de éxito. Para fines de prueba, puede cambiar la URL a algo incorrecto y ver qué sucederá.

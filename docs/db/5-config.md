# Configurar Mongosse

Para usar **Mongoose**, primero, instale el paquete y luego solicítelo. Para instalar, use el siguiente comando:
    $ npm install --save mongoose 


Para usarlo en un módulo o archivo, debe importarlo con el siguiente comando:

    
    const mongoose = require('mongoose'); 


Después de instalar e importar, tiene una cosa más que hacer: conectar Mongoose a MongoDB.

Para eso, debe conocer la URL de su servidor MongoDB y el siguiente comando:

    
    mongoose.connect('mongodb://127.0.01:27017/your_database_name'); 


Aquí "your_database_name" puede ser cualquier cosa. Pero no debe cambiarlo si desea conservar sus datos. Por ejemplo, supongamos que nombró a su base de datos "RESTapiDB". MongoDB almacenará todos sus esquemas en esta base de datos. Luego, supongamos que crea 100 entradas y luego cambia el nombre de la base de datos de su aplicación. En este caso, ya no tendrá acceso a las entradas hasta que vuelva a cambiar el nombre.

>Este caso puede ser útil, por ejemplo, si necesita tener una base de datos diferente para pruebas y producción.
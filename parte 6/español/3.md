## Instalar y configurar MongoDB

En esta lección, vamos a configurar MongoDB en nuestro sistema. Puede encontrar la guía de instalación oficial [aquí](https://docs.mongodb.com/manual/installation/).

Después de la instalación, puede usar el siguiente comando para iniciar el servidor **mongod**:
    $ sudo service mongod start 

Para apagar el servidor:
        
    $ sudo service mongod stop 


Y finalmente para reiniciar el servidor:
    
    $ sudo service mongod restart 


Para iniciar un [mongo shell] () en la misma máquina host que el mongod, use la opción de línea de comando **--host** para especificar la dirección localhost y el puerto en el que el mongod escucha. Por ejemplo:

    $ mongo --host 127.0.0.1:27017 

>Por defecto, el mongod se ejecuta en 127.0.0.1:27017 (localhost: 27017) y puede usarlo para crear su base de datos con herramientas como Mongoose.
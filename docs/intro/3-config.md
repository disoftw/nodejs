# Configuración del proyecto

Puede encontrar las instrucciones de instalación de Node.js [aquí](https://nodejs.org/en/download/).

Es importante saber cómo funciona el proyecto Node y cómo se construye.

:::warning IMPORTANTE 
Node está trabajando estrechamente con npm, lo que significa que en muchos casos usaremos **[comandos npm](2-npm.md)** para lograr algo en Node.
:::

Para crear un proyecto Node, todo lo que necesitamos es **npm init.**

Este comando nos hará algunas preguntas y creará el archivo package.json donde se almacenan todos los datos.

El siguiente paso es instalar y agregar las dependencias mediante el comando **npm install 'package_name' --save.**
Esto creará el directorio **node_modules** (instalar) y lo guardará dentro de package.json para su uso posterior.

Hasta ahora tenemos los siguientes archivos y directorios:

```
node_modules
package.json
package-lock.json
```

Ahora que el proyecto está configurado, creemos los archivos .js para comenzar a escribir código. Por ahora, solo necesitamos un archivo llamado app.js para crear y ejecutar nuestro servidor.

```js
 $ touch app.js
 ```


:::tip 
Puede ejecutar cualquier código JavaScript usando Node escribiendo **node** en el terminal y comenzar a escribir su código o guardar su código dentro de un archivo y ejecutar el script usando el comando **node file_name.js** del nodo.
# Introducción a Node.js js

**Node.js** es un entorno JavaScript de código abierto, multiplataforma en tiempo de ejecución que ejecuta código JavaScript del lado del **servidor**.

Node.js se basa en el motor **JavaScript V8 de Chrome**. Utiliza un modelo de E/S **sin bloqueo** controlado por eventos que lo hace liviano y eficiente.

Tiene su propio ecosistema de paquetes, llamado npm (Node Package Manager), que es el ecosistema de bibliotecas de código abierto más grande del mundo.

Las tareas típicas para un servidor son manejar las solicitudes de los usuarios, abrir un archivo en el servidor, acceder a la base de datos y devolver el contenido al cliente. Pero no todos los servidores web funcionan de la misma manera. En el caso de Node.js, es importante enfatizar su **E/S asincrónica**, **sin bloqueo** y de **subproceso único (Single Threaded)**.

Por ejemplo, considere esta comparación de cómo PHP maneja los eventos de una solicitud de archivo versus cómo Node.js maneja uno.

**PHP:**
1. El servidor solicita un archivo del sistema de archivos.
2. El servidor espera hasta que el sistema se abre y lee el archivo.
3. El servidor devuelve los datos al cliente.
4. El servidor maneja la siguiente solicitud.

**Node.js:**
1. El servidor solicita un archivo del sistema de archivos.
2. El servidor maneja la siguiente solicitud.
3. Cuando el sistema se abre y lee el archivo, el servidor devolverá los datos al cliente.

:::warning ¡IMPORTANTE!
PHP y muchos otros frameworks del lado del servidor utilizan el enfoque **multihilo** que consume mucha memoria y recursos de CPU. Por el contrario, Node.js es de un solo subproceso y utiliza los eventos del sistema para lograrlo a través de sus capacidades asincrónicas y sin bloqueo.
# Streams

**Streams** son la herramienta más poderosa para trabajar cuando tienes una gran cantidad de datos. Son similares a cadenas o matrices, pero la diferencia es que las transmisiones podrían **no estar disponibles de una vez** (problemas de tamaño de memoria o ancho de banda de red). Por lo tanto, las transmisiones cargan los datos en **fragmentos** una vez a la vez. Pero manejar big data no es el único caso de uso para ellos; También puede usarlos para **canalizar** los datos en otros comandos (similar a canalizar en Linux).

La mayoría de las aplicaciones de Node.js, incluso unas API simples como la Creación de un servidor web, utilizan secuencias de alguna manera. Por ejemplo, **req** y **res** son flujos. **req** es un http.IncomingMessage, que es un **Stream legible**; **res** es un http.ServerResponse, que es un **Flujo de escritura**.

Un ejemplo de creación de una secuencia de escritura es el método **fs.createWriteStream()** del módulo 'fs'. Las secuencias grabables exponen métodos como **write()** y **end()** que se utilizan para escribir datos en la secuencia.

Un buen ejemplo de cómo crear un flujo legible es usar el método fs.createReadStream (). Las transmisiones legibles utilizan EventEmitter para notificar el código de la aplicación cuando los datos están disponibles para ser leídos desde la transmisión. Los datos disponibles se pueden leer de la transmisión de múltiples maneras, lo que se discutirá más adelante.

> Tanto las transmisiones **grabables** como **legibles** utilizan **EventEmitter** de varias maneras para comunicar el estado actual de la **transmisión**.
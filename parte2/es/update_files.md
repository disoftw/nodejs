# Actualizar archivos

Otro método poderoso para la manipulación de archivos es el método **fs.open()**.

```js

fs.open(path, flags[, mode], callback)

```

Este método puede tomar diferentes indicadores que cambian su comportamiento. Estas son algunas de las banderas que **fs.open()** puede tomar:
 - **'r'**: archivo abierto para leer. Se produce una excepción si el archivo no existe.
 - **'r+'**: archivo abierto para leer y escribir. Se produce una excepción si el archivo no existe.
 - **'w'**: archivo abierto para escritura. El archivo se crea (si no existe) o se trunca (si existe).
 - **'w+'**: archivo abierto para leer y escribir. El archivo se crea (si no existe) o se trunca (si existe).
 - **'a'**: archivo abierto para agregar. El archivo se crea si no existe.
 - **'a+'**: archivo abierto para leer y agregar. El archivo se crea si no existe.

 > Las banderas **'w'** y **'a'** también se pueden usar con una bandera **'x'** como **'wx+'** o **'ax'**. Estos funcionan de manera similar a la bandera original pero **fallan si el archivo existe**.

 El siguiente ejemplo muestra cómo agregar un archivo usando ambos fs.open() y fs.appendFile():

 ```js
fs.open('file.txt', 'a', (err, fd) => {
  if (err) throw err;
  fs.appendFile(fd, 'Text/Data to append', 'utf8', (err) => {
    fs.close(fd, (err) => {
      if (err) throw err;
    });
    if (err) throw err;
  });
});
```

> Si necesita la versión síncrona, utilice el método **fs.openSync()**.

Para renombrar archivos, use el método **fs.rename()**.

```js
fs.rename('/home/file1', '/home/file2', (err) => {
  if (err) throw err;
  console.log('rename completed');
});
```
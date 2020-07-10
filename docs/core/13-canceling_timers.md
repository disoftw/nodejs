# Cancelación de temporizadores

Los métodos **setImmediate()**, **setInterval()** y **setTimeout()** devuelven objetos que representan los **temporizadores programados**. Lo siguiente se puede usar para cancelar el temporizador y evitar que se active.
 - **clearImmediate(inmediato)**
 - **clearInterval(tiempo de espera)**
 - **clearTimeout(tiempo de espera)**

 El comportamiento de todos los métodos **claros** anteriores es similar. Veamos un ejemplo sobre cómo borrar setInterval():

  ```js
const myTime = setInterval(() => {
  const num = Math.floor((Math.random() * 10) + 1);
  console.log('The random number is:' + num);
  if(num > 8) {
    clearInterval(myTime);
  }
}, 1000);
```

El código anterior imprimirá los números generados aleatoriamente que van del 1 al 10, cada 1 segundo. Si el número es mayor que 8, llamará al **clearInterval()** en nuestra variable de tiempo, myTime.

:::tip
`clearImmediate()` cancela el objeto creado por `setImmediate().clearTimeout()` cancela el objeto creado por `setTimeout()`.
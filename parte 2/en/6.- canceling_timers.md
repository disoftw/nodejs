# Canceling Timers


The **setImmediate()**, **setInterval()**, and **setTimeout()** methods each return objects that represent the **scheduled timers**. The following can be used to cancel the timer and prevent it from triggering.
 - **clearImmediate(immediate)**
 - **clearInterval(timeout)**
 - **clearTimeout(timeout)**

 The behavior of all the **clear** methods above is similar. Let's see an example on how to clear setInterval():

 ```js
const myTime = setInterval(() => {
  const num = Math.floor((Math.random() * 10) + 1);
  console.log('The random number is:' + num);
  if(num > 8) {
    clearInterval(myTime);
  }
}, 1000);
```

The code above will print the randomly generated numbers which range from 1 to 10, every 1 second. If the number is greater than 8, then it will call the **clearInterval()** on our time variable, myTime.

> clearImmediate() cancels object created by setImmediate(). clearTimeout() cancels object created by setTimeout().
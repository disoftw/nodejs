# Writable Stream Events

Writable streams have many powerful events and functions. Here are the most common events:

'**error**': This event will be emitted if an error happens during the writing or piping of data.

'**finish**': Emitted after the `end()` method has been called.

'**close**': Indicates that no more events will be emitted. It is emitted when the stream and any of its resources have been closed.

'**pipe**': Emitted when the `pipe()` method is called on a readable stream. It will basically feed the writable from the readable.

'**unpipe**': This event is the opposite of the 'pipe' event, and it will be emitted when the `unpipe()` method is called on a Readable stream. This will be also emitted when a Writable stream emits an error to the 'pipe'.

'**drain**': If the `write()` method returns false, the 'drain' event will be emitted when it again becomes ready to write. This can be caused because of different bandwidths and speeds of writing and reading.

Let's add events 'finish' and 'close' to the previous example:

```js
const fs = require('fs');
const file = fs.createWriteStream('./big-file.txt');

for(let i = 0; i <= 1000000; i++) {
  file.write('...');
}

file.on('close', () => {
  console.log('OnClose'); // 3
});
file.on('finish', () => {
  console.log('OnFinish'); // 1
});

file.end(() => {
  console.log('end'); // 2
});
```

If you run the code, you will see that the order of the outputs is the following:
1. OnFinish
2. end
3. OnClose

Check out a case study on writable stream events.

## Writable Stream Events: Case Study js

In this lesson, we will go over an example where we will use the 'drain' event and see how it works.

Let's modify our previous example to listen on 'drain' event and count how many times it will be called:

const fs = require('fs');
const file = fs.createWriteStream('./big-file.txt');

const str = 'This is just a text that we are going to write to the big-file.txt one million times. So it becomes a big file (around 150MB) for Stream example purposes.\n';

```js
const writeOneMillionTimes = (writeStream, data, callback) => {
  let i = 1000000;
  drain_counter = 0;
  const writer = () => {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time! So, it should call the callback.
        writeStream.write(data, callback);
        writeStream.end(() => {
          console.log('drain_counter: ' + drain_counter);
        });
        console.log('drain_counter: ' + drain_counter);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writeStream.write(data);
      }
    } while (i > 0 && ok);

    if (i > 0) {
      // had to stop early! write some more once it drains
      writeStream.once('drain', writer); // calls the function when drain got emitted
      drain_counter++;
    }
  }
  writer();
}

writeOneMillionTimes(file, str, () => {
  console.log('Task complete');
});
```

The functionality of the example above is similar to the previous one: we are streaming data into the file. However, in this example, we are using the 'drain' event where it waits until the writer's buffer becomes empty and emits the 'drain' event. After receiving the emit, again we call the writer function and start writing data into the file.

---

We also count how many times did the 'drain' event emitted and print it at the end.

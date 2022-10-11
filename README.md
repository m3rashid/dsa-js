# @m3rashid/dsa-js

A no dependency data-structures and algorithms library for node and browser.

[checkout on NPM](https://www.npmjs.com/package/@m3rashid/dsa-js)

<br />

### Requirements

```bash
nodejs >=16.x
```

<br />

### Install

```bash
npm install @m3rashid/dsa-js
# or
yarn add @m3rashid/dsa-js
# or
pnpm add @m3rashid/dsa-js
```

<br />

### Usage

```ts
// stacks

import { Stack } from '@m3rashid/dsa-js';

const myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);

myStack.pop();
console.log(myStack.top());
console.log(myStack.size());

// queues
import { Queue } from '@m3rashid/dsa-js';

const myQueue = new Queue<number>();
myQueue.enqueue(1);
myQueue.enqueue(3);
myQueue.dequeue();
console.log(myQueue.front());
console.log(myQueue.rear());
console.log(myQueue.print());

// similarly for linked-list, doubly-linked-list etc ...
```

For more information about the library, [Read docs](https://m3rashid.github.io/dsa-js/)

<br />

### Inspiration

The inspiration for this library comes from the standard C++ library which includes almost all the daily used data-structures and algorithms.

Currently, this package has implemented stack, queue, linked-list, doubly-linked-list, queue, data structures

Please wait or [contribute to the repository](git+https://github.com/m3rashid/dsa-js) to get more

<br />

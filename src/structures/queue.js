//node of queue
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//queue class
class Queue {
    constructor() {
        //front and rear of queue
        this.f = null;
        this.r = null;

        //size of queue
        this.s = 0;
    }

    //function to add element into the queue
    enqueue(data) {
        let node = new Node(data);

        //first element
        if (this.f === null) {
            this.f = node;
            this.r = node;
        } else {
            this.r.next = node;
            this.r = node;
        }
        this.s++;
        return true;
    }

    //function to remove element from the queue
    dequeue() {
        //if queue is empty
        if (this.f === null) {
            return false;
        }
        this.f = this.f.next;
        this.s--;
        return true;
    }

    //function to get front element of the queue
    front() {
        //if queue is empty
        if (this.f === null) {
            return null;
        }
        return this.f.data;
    }

    //function to get rear element of the queue
    rear() {
        //if queue is empty
        if (this.r === null) {
            return null;
        }
        return this.r.data;
    }

    //function to check if queue is empty
    isEmpty() {
        return this.s === 0;
    }

    //function to get size of the queue
    size() {
        return this.s;
    }

    //function to print queue
    print() {
        let current = this.f;
        let str = '[';
        while (current) {
            str += current.data;
            if (current.next) {
                str += ', ';
            }
            current = current.next;
        }
        str += ']';
        return str;
    }
}

//create a queue
// let queue = new Queue();

// queue.enqueue(1);
// //[1]

// queue.enqueue(2);
// //[1, 2]

// queue.enqueue(3);
// //[1, 2, 3]
// queue.enqueue(4);
// //[1, 2, 3, 4]

// queue.enqueue(5);
// //[1, 2, 3, 4, 5]

// queue.dequeue();
// //[2, 3, 4, 5]

// queue.dequeue();
// //[3, 4, 5]

// queue.dequeue();
// //[4, 5]

// console.log(queue.front());
// //4

// console.log(queue.rear());
// //5

// console.log(queue.isEmpty());
// //false

// console.log(queue.size());
// //2

// console.log(queue.print());
// //[4, 5]

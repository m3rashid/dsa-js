//node of stack
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//stack class
class Stack {
    constructor() {
        //top of stack
        this.top = null;

        //size of stack
        this.s = 0;
    }

    //function to push element into the stack
    push(data) {
        let node = new Node(data);
        node.next = this.top;
        this.top = node;
        this.s++;
        return true;
    }

    //function to pop element from the stack
    pop() {
        //if stack is empty
        if (this.top === null) {
            return false;
        }
        let data = this.top.data;
        this.top = this.top.next;
        this.s--;

        return true
    }

    //function to get top element of the stack
    top() {
        //if stack is empty
        if (this.top === null) {
            return null;
        }
        return this.top.data;
    }

    //function to check if stack is empty
    isEmpty() {
        return this.s === 0;
    }

    //function to get size of the stack
    size() {
        return this.s;
    }

    //function to print stack
    print() {
        let current = this.top;
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

//sample code to test the stack
// const stack = new Stack();

// stack.push(1);
// [1]

// stack.push(2);
// [2, 1]

// stack.push(3);
// [3, 2, 1]

// stack.push(4);
// [4, 3, 2, 1]

// stack.pop();
// [3, 2, 1]

// stack.pop();
// [2, 1]

// stack.push(5);
// [5, 2, 1]

// console.log(stack.top());
// 5

// console.log(stack.size());
// 3

// console.log(stack.print());
// [5, 2, 1]
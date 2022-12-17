'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.test = exports.Stack = exports.StackNode = void 0;
class StackNode {
	constructor(data) {
		this._data = data;
		this._next = null;
	}
}
exports.StackNode = StackNode;
class Stack {
	constructor() {
		this._top = null;
		this._size = 0;
	}
	push(data) {
		const node = new StackNode(data);
		node._next = this._top;
		this._top = node;
		this._size++;
		return true;
	}
	pop() {
		if (this._top === null) throw new Error('Stack is empty');
		// const data = this._top._data;
		this._top = this._top._next;
		this._size--;
		return true;
	}
	top() {
		if (this._top === null) throw new Error('Stack is empty');
		return this._top._data;
	}
	isEmpty() {
		return this._size === 0;
	}
	size() {
		return this._size;
	}
	print() {
		let current = this._top;
		let str = '[';
		while (current) {
			str += current._data;
			if (current._next) str += ', ';
			current = current._next;
		}
		str += ']';
		return str;
	}
}
exports.Stack = Stack;
//sample code to test the stack
const test = () => {
	const stack = new Stack();
	stack.push(1); // [1]
	stack.push(2); // [2, 1]
	stack.push(3); // [3, 2, 1]
	stack.push(4); // [4, 3, 2, 1]
	stack.pop(); // [3, 2, 1]
	stack.pop(); // [2, 1]
	stack.push(5); // [5, 2, 1]
	console.log(stack.top()); // 5
	console.log(stack.size()); // 3
	console.log(stack.print()); // [5, 2, 1]
};
exports.test = test;

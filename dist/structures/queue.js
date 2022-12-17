'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.test = exports.Queue = exports.QueueNode = void 0;
class QueueNode {
	constructor(data) {
		this._data = data;
		this._next = null;
	}
}
exports.QueueNode = QueueNode;
class Queue {
	constructor() {
		this._front = null;
		this._rear = null;
		this._size = 0;
	}
	enqueue(data) {
		const node = new QueueNode(data);
		if (this._front === null) {
			this._front = node;
			this._rear = node;
		} else {
			if (!this._rear || !this._rear._next) throw new Error('No Queue found');
			this._rear._next = node;
			this._rear = node;
		}
		this._size++;
		return true;
	}
	dequeue() {
		if (this._front === null) throw new Error('No Queue found');
		this._front = this._front._next;
		this._size--;
		return true;
	}
	front() {
		if (this._front === null) return null;
		return this._front._data;
	}
	rear() {
		if (this._rear === null) return null;
		return this._rear._data;
	}
	isEmpty() {
		return this._size === 0;
	}
	size() {
		return this._size;
	}
	print() {
		let current = this._front;
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
exports.Queue = Queue;
const test = () => {
	const queue = new Queue();
	queue.enqueue(1); // [1]
	queue.enqueue(2); // [1, 2]
	queue.enqueue(3); // [1, 2, 3]
	queue.enqueue(4); // [1, 2, 3, 4]
	queue.enqueue(5); // [1, 2, 3, 4, 5]
	queue.dequeue(); // [2, 3, 4, 5]
	queue.dequeue(); // [3, 4, 5]
	queue.dequeue(); // [4, 5]
	console.log(queue.front()); // 4
	console.log(queue.rear()); // 5
	console.log(queue.isEmpty()); // false
	console.log(queue.size()); // 2
	console.log(queue.print()); // [4, 5]
};
exports.test = test;

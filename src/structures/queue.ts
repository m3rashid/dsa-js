export class QueueNode<T> {
	_data: T;
	_next: QueueNode<T> | null;

	constructor(data: T) {
		this._data = data;
		this._next = null;
	}
}

export class Queue<T> {
	_front: QueueNode<T> | null;
	_rear: QueueNode<T> | null;
	_size: number;

	constructor() {
		this._front = null;
		this._rear = null;
		this._size = 0;
	}

	enqueue(data: T) {
		const node = new QueueNode<T>(data);

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

export const test = () => {
	const queue = new Queue<number>();
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

export class DoublyLinkedListNode<T> {
	_value: T;
	_next: DoublyLinkedListNode<T> | null;
	_prev: DoublyLinkedListNode<T> | null;

	constructor(data: T) {
		this._value = data;
		this._next = null;
		this._prev = null;
	}

	get value() {
		return this._value;
	}

	get next() {
		return this._next;
	}

	set next(node) {
		this._next = node;
	}

	get prev() {
		return this._prev;
	}

	set prev(node) {
		this._prev = node;
	}
}

export class DoublyLinkedList<T> {
	_head: DoublyLinkedListNode<T> | null;
	_tail: DoublyLinkedListNode<T> | null;
	_length: number;

	constructor() {
		this._head = null;
		this._tail = null;
		this._length = 0;
	}

	get length() {
		return this._length;
	}

	isEmpty() {
		return this._length === 0;
	}

	get tail() {
		return this._tail;
	}

	get head() {
		return this._head;
	}

	push(data: T) {
		const newNode = new DoublyLinkedListNode<T>(data);

		if (this._head === null) {
			this._tail = newNode;
		}

		newNode._next = this._head;
		newNode._prev = null;

		if (this._head !== null) {
			this._head.prev = newNode;
		}

		this._head = newNode;
		this._length += 1;
	}

	insertAfter(prevNode: DoublyLinkedListNode<T>, data: T) {
		if (prevNode === null || prevNode === undefined) {
			throw new Error('Previous node cannot be null or undefined');
		}

		const newNode = new DoublyLinkedListNode<T>(data);

		if (prevNode._next === null) {
			this._tail = newNode;
		}

		newNode._next = prevNode.next;
		prevNode._next = newNode;
		newNode._prev = prevNode;

		if (newNode._next !== null) {
			newNode._next._prev = newNode;
		}

		this._length += 1;
	}

	insertBefore(node: DoublyLinkedListNode<T>, data: T) {
		if (node === null || node === undefined) {
			throw new Error('DoublyLinkedListNode cannot be null or undefined');
		}

		const newNode = new DoublyLinkedListNode(data);

		newNode._prev = node._prev;
		node._prev = newNode;
		newNode._next = node;

		if (newNode._prev !== null) {
			newNode._prev._next = newNode;
		} else {
			this._head = newNode;
		}
		this._length += 1;
	}

	pop() {
		if (this._head === null) {
			throw new Error('No nodes to pop');
		}

		const reference = this._head;
		this._head = this._head.next;
		this._length -= 1;

		return reference;
	}

	deleteNode(node: DoublyLinkedListNode<T>) {
		if (node === null || node === undefined) {
			throw new Error('DoublyLinkedListNode to be deleted cannot be null');
		}

		if (node === this._tail) this._tail = node._prev;
		else {
			if (!node || !node._next) throw new Error('Node cannot be null');
			node._next._prev = node._prev;
		}

		if (node === this._head) this._head = node._next;
		else {
			if (!node || !node._prev) throw new Error('Node cannot be null');
			node._prev._next = node._next;
		}

		this._length -= 1;
	}

	getNode(index: number) {
		if (index <= 0 || index > this._length) {
			throw new RangeError('Index out of range');
		}

		let reference = this._head;

		for (let i = 1; i < index; i += 1) {
			if (!reference) throw new Error('Got null reference for node');
			reference = reference.next;
		}

		return reference;
	}

	toString() {
		let reference = this._head;
		let str = '';
		while (reference !== null) {
			str += `${reference.value} -> `;
			reference = reference.next;
		}
		str += 'null';
		return str;
	}
}

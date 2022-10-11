export class LinkedListNode<T> {
	_data: T;
	_next: LinkedListNode<T> | null;

	constructor(data: T) {
		this._data = data;
		this._next = null;
	}
}

export class LinkedList<T> {
	_head: LinkedListNode<T> | null;
	_size: number;

	constructor() {
		this._head = null;
		this._size = 0;
	}

	insertAtBeginning(data: T) {
		const node = new LinkedListNode<T>(data);
		node._next = this._head;
		this._head = node;
		this._size++;

		return true;
	}

	insertAtEnd(data: T) {
		const node = new LinkedListNode<T>(data);
		let current = this._head;

		if (!current) throw new Error('No HEAD of Linked List initialized');

		while (current._next) current = current._next;

		current._next = node;
		this._size++;
		return true;
	}

	insertAt(data: T, index: number) {
		if (index < 0 || index > this._size) throw new Error('Index out of range');

		if (index === 0) {
			this.insertAtBeginning(data);
			return false;
		}

		const node = new LinkedListNode<T>(data);
		let current = this._head;
		let previous;
		let count = 0;

		while (count < index) {
			previous = current;
			if (!current) throw new Error('Index out of bounds');
			current = current._next;
			count++;
		}

		node._next = current;
		if (!previous) throw new Error('No HEAD of Linked List initialized');
		previous._next = node;
		this._size++;

		return true;
	}

	removeFromBeginning() {
		if (this._size === 0) return false;

		//move head to next node
		if (!this._head) throw new Error('No HEAD of Linked List initialized');
		this._head = this._head._next;
		this._size--;

		return true;
	}

	removeFromEnd() {
		if (this._size === 0) throw new Error('No HEAD of Linked List initialized');

		let current = this._head;
		let previous;

		if (!current) throw new Error('No HEAD of Linked List initialized');
		while (current._next) {
			previous = current;
			current = current._next;
		}

		if (!previous) throw new Error('No HEAD of Linked List initialized');
		previous._next = null;
		this._size--;

		return true;
	}

	removeAt(index: number) {
		if (index < 0 || index >= this._size) throw new Error('Index out of range');

		if (index === 0) {
			this.removeFromBeginning();
			return true;
		}

		let current = this._head;
		let previous;
		let count = 0;

		while (count < index) {
			if (!current) throw new Error('Index out of bounds');
			previous = current;
			current = current._next;
			count++;
		}

		if (!previous || !current) throw new Error('No HEAD of Linked List initialized');
		previous._next = current._next;
		this._size--;

		return true;
	}

	indexOfFirst(data: T) {
		let current = this._head;
		let count = 0;
		while (current) {
			if (current._data === data) return count;
			current = current._next;
			count++;
		}
		return -1;
	}

	indexOfLast(data: T) {
		let current = this._head;
		let count = 0;
		let index = -1;
		while (current) {
			if (current._data === data) index = count;
			current = current._next;
			count++;
		}
		return index;
	}

	isEmpty() {
		return this._size === 0;
	}

	size() {
		return this._size;
	}

	printList() {
		let current = this._head;
		let list = '';
		list += '[';
		while (current) {
			list += current._data;
			if (current._next) list += ',';
			current = current._next;
		}
		list += ']';
		console.log(list);
	}

	reverse() {
		let current = this._head;
		let previous = null;
		let next = null;
		while (current) {
			next = current._next;
			current._next = previous;
			previous = current;
			current = next;
		}
		this._head = previous;
	}
}

//sample code to test the linked list
export const test = () => {
	const list = new LinkedList<number>();
	list.insertAtBeginning(1); // [1]
	list.insertAtBeginning(2); // [2,1]
	list.insertAtEnd(5); // [2,1,5]
	list.insertAtEnd(6); // [2,1,5,6]
	list.insertAt(7, 2); // [2,1,7,5,6]
	list.removeFromBeginning(); // [1,7,5,6]
	list.printList(); // [2,7,5,6]
	list.reverse(); // [6,5,7,2]
	list.printList(); // [6,5,7,2]
};

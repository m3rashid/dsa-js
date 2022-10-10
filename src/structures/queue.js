//node of queue
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

/**
 * @class
 * @description
 * Queue is a linear data structure which follows a particular order in which the operations are performed.
 * The order is First In First Out (FIFO).
 */
class Queue {
	/**
     * @constructor
     */
	constructor() {
		//front and rear of queue
		this.f = null;
		this.r = null;

		//size of queue
		this.s = 0;
	}

	/**
     * 
     * @param {Any} data Element to be inserted
     * @returns {Boolean} true if the element is inserted successfully, else false.
     * @description
     * Inserts an element at the rear of the queue.
     * Time complexity: O(1)
     * Space complexity: O(1)
     */
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

	/**
     * 
     * @returns {Boolean} true if the element is deleted successfully, else false.
     * @description
     * Deletes an element from the front of the queue.
     * Time complexity: O(1)
     * Space complexity: O(1)
     */
	dequeue() {
		//if queue is empty
		if (this.f === null) {
			return false;
		}
		this.f = this.f.next;
		this.s--;
		return true;
	}

	/**
     * 
     * @returns {Any} The front element of the queue.
     * @description
     * Returns the front element of the queue.
     * Time complexity: O(1)
     * Space complexity: O(1)
     */
	front() {
		//if queue is empty
		if (this.f === null) {
			return null;
		}
		return this.f.data;
	}

	/**
     * 
     * @returns {Any} The rear element of the queue.
     * @description
     * Returns the rear element of the queue.
     * Time complexity: O(1)
     * Space complexity: O(1)
     */
	rear() {
		//if queue is empty
		if (this.r === null) {
			return null;
		}
		return this.r.data;
	}

	/**
     * 
     * @returns {Boolean} true if the queue is empty, else false.
     * @description
     * Checks if the queue is empty.
     * Time complexity: O(1)
     * Space complexity: O(1)
     */
	isEmpty() {
		return this.s === 0;
	}

	/**
     * 
     * @returns {Number} The size of the queue.
     * @description
     * Returns the size of the queue.
     * Time complexity: O(1)
     * Space complexity: O(1)
     */
	size() {
		return this.s;
	}

	/**
     * 
     * @returns {String} The string representation of the queue.
     * @description
     * Returns the string representation of the queue.
     * Time complexity: O(n)
     * Space complexity: O(n)
     */
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

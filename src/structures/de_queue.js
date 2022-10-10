//node of double ended queue
class Node {
	constructor(data) {
		this.data = data
		this.next = null
		this.prev = null
	}
}

/**
 * @class DeQueue
 * @description
 * A double ended queue is a queue that allows insertion and deletion from both the front and the rear.
 * It is a linear data structure that follows the FIFO (First In First Out) principle.
 * It is similar to a queue but with the ability to insert and delete elements from both the front and the rear.
 * It is also known as a head-tail linked list.
 */
class DEQueue {
	/**
   * @constructor
   */
	constructor() {
		//front and rear of queue
		this.head = null
		this.tail = null

		//size of queue
		this.length = 0
	}

	/**
   *
   * @param {Any} data the element to be inserted.
   * @returns {Boolean} true if the element is inserted successfully, else false.
   * @description
   * Inserts an element at the front of the queue.
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
	enqueueFront(data) {
		let node = new Node(data)

		if (this.head === null) {
			this.head = node
			this.tail = node
		} else {
			this.head.prev = node
			node.next = this.head
			this.head = node
		}
		this.length++
		return true
	}

	/**
   *
   * @param {Any} data the element to be inserted.
   * @returns {Boolean} true if the element is inserted successfully, else false.
   * @description
   * Inserts an element at the rear of the queue.
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
	enqueueRear(data) {
		let node = new Node(data)

		if (this.tail === null) {
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
			node.prev = this.tail
			this.tail = node
		}
		this.length++
		return true
	}

	/**
   *
   * @returns {Boolean} true if the element is removed successfully, else false.
   * @description
   * Removes an element from the front of the queue.
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
	dequeueFront() {
		//if queue is empty
		if (this.head === null) {
			return false
		}
		this.head = this.head.next
		this.length--
		return true
	}

	/**
   *
   * @returns {Boolean} true if the element is removed successfully, else false.
   * @description
   * Removes an element from the rear of the queue.
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
	dequeueRear() {
		//if queue is empty
		if (this.tail === null) {
			return false
		}
		this.tail = this.tail.prev
		this.length--
		return true
	}

	/**
   *
   * @returns {Any} the element at the front of the queue.
   * @description
   * Returns the element at the front of the queue. Returns null if the queue is empty.
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
	front() {
		//if queue is empty
		if (this.head === null) {
			return null
		}
		return this.head.data
	}

	/**
   *
   * @returns {Any} the element at the rear of the queue.
   * @description
   * Returns the element at the rear of the queue. Returns null if the queue is empty.
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
	rear() {
		//
		if (this.tail === null) {
			return null
		}
		return this.tail.data
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
		return this.length === 0
	}

	/**
   *
   * @returns {Number} the size of the queue.
   * @description
   * Returns the size of the queue.
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
	size() {
		return this.length
	}

	/**
   * @description
   * function to reverse the queue
   */
	reverse() {
		let current = this.head
		let temp = null

		//exchange next and prev for all nodes of the queue
		while (current !== null) {
			temp = current.prev
			current.prev = current.next
			current.next = temp
			current = current.prev
		}
		if (temp !== null) {
			this.head = temp.prev
		}
	}

	/**
   *
   * @returns {String} the string representation of the queue.
   * @description
   * Prints the whole queue.
   */
	print() {
		let current = this.head
		let result = '['
		while (current) {
			result += current.data
			if (current.next) {
				result += ','
			}
			current = current.next
		}
		result += ']'
		return result
	}
}

// //creating double ended queue
// const deQueue = new DEQueue()

// deQueue.enqueueFront(1)
// //deQueue: [1]

// deQueue.enqueueFront(2)
// //deQueue: [2,1]

// deQueue.enqueueFront(3)
// //deQueue: [3,2,1]

// deQueue.enqueueRear(4)
// //deQueue: [3,2,1,4]

// deQueue.enqueueRear(5)
// //deQueue: [3,2,1,4,5]

// console.log(deQueue.front())
// //3

// console.log(deQueue.rear())
// //5

// console.log(deQueue.isEmpty())
// //false

// console.log(deQueue.size())
// //5

// console.log(deQueue.print())
// //[3,2,1,4,5]

// deQueue.reverse()
// //deQueue: [5,4,1,2,3]

// console.log(deQueue.print())
// //[5,4,1,2,3]

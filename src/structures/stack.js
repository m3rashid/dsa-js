//node of stack
class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

/**
 * @class
 * @description
 * Stack is a linear data structure which follows a particular order in which the operations are performed.
 * The order may be LIFO(Last In First Out) or FILO(First In Last Out).
 */
class Stack {
	/**
   * @constructor
   */
	constructor() {
		//top of stack
		this.top = null

		//size of stack
		this.s = 0
	}

	/**
   *
   * @param {Any} data Element to be inserted
   * @returns {Boolean} true if the element is inserted successfully, else false.
   * @description
   * Inserts an element at the top of the stack.
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
	push(data) {
		let node = new Node(data)
		node.next = this.top
		this.top = node
		this.s++
		return true
	}

	/**
   *
   * @returns {Boolean} true if the element is deleted successfully, else false.
   * @description
   * Deletes an element from the top of the stack.
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
	pop() {
		//if stack is empty
		if (this.top === null) {
			return false
		}
		let data = this.top.data
		this.top = this.top.next
		this.s--

		return true
	}

	/**
   *
   * @returns {Any} top element of the stack
   * @description
   * Returns the top element of the stack.
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
	top() {
		//if stack is empty
		if (this.top === null) {
			return null
		}
		return this.top.data
	}

	/**
   *
   * @returns {Boolean} true if the stack is empty, else false.
   * @description
   * Checks if the stack is empty.
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
	isEmpty() {
		return this.s === 0
	}

	/**
   *
   * @returns {Number} size of the stack
   * @description
   * Returns the size of the stack.
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
	size() {
		return this.s
	}

	/**
   *
   * @returns {String} string representation of the stack
   * @description
   * Returns the string representation of the stack.
   * Time complexity: O(n)
   * Space complexity: O(n)
   */
	print() {
		let current = this.top
		let str = '['
		while (current) {
			str += current.data
			if (current.next) {
				str += ', '
			}
			current = current.next
		}
		str += ']'
		return str
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

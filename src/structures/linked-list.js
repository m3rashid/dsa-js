//node of linked list
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

/**
 * @class
 * @description
 * A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.
 * The elements in a linked list are linked using pointers.
 * It is a data structure consisting of a collection of nodes which together represent a sequence.
 */
class LinkedList {
	/**
     * @constructor
     */
	constructor() {
		this.head = null;
		this.s = 0;
	}


	/**
     * 
     * @param {Any} data Element to be inserted
     * @returns {Boolean} true if data inserted successfully
     * @description
     * Insert data at the beginning of the list
     * Time complexity: O(1)
     * Space complexity: O(1)
     */
	insertAtBeginning(data) {
		let node = new Node(data);
		node.next = this.head;
		this.head = node;
		this.s++;

		return true;
	}


	/**
     * 
     * @param {Any} data Element to be inserted
     * @returns {Boolean} true if data inserted successfully
     * @description
     * Insert data at the end of the list
     * Time complexity: O(n)
     * Space complexity: O(1)
     */
	insertAtEnd(data) {
		let node = new Node(data);
		let current = this.head;

		//iterate to the end of the list
		while (current.next) {
			current = current.next;
		}

		//add node
		current.next = node;
		this.s++;

		return true;
	}

	/**
     * 
     * @param {Any} data Element to be inserted
     * @param {Number} index 
     * @returns {Boolean} true if data inserted successfully
     * @description
     * Insert data at the given index
     * Time complexity: O(n)
     * Space complexity: O(1)
     */
	insertAt(data, index) {

		//if index is out of range
		if (index < 0 || index > this.s) {
			return false;
		}

		//if index is first position
		if (index === 0) {
			this.insertAtBeginning(data);
			return false;
		}


		let node = new Node(data);
		let current = this.head;
		let previous;
		let count = 0;

		//iterate to the position - 1 to insert
		while (count < index) {
			previous = current;
			current = current.next;
			count++;
		}

		//insert node
		node.next = current;
		previous.next = node;
		this.s++;

		return true;
	}


	/**
     * 
     * @returns {Boolean} true if data removed successfully
     * @description
     * Remove data from the beginning of the list
     * Time complexity: O(1)
     * Space complexity: O(1)
     */
	removeFromBeginning() {

		//if list is empty
		if (this.s === 0) {
			return false;
		}

		//move head to next node
		this.head = this.head.next;
		this.s--;

		return true;
	}


	/**
     * 
     * @returns {Boolean} true if data removed successfully
     * @description
     * Remove data from the end of the list
     * Time complexity: O(n)
     * Space complexity: O(1)
     */
	removeFromEnd() {
		//if list is empty
		if (this.s === 0) {
			return false;
		}
		let current = this.head;
		let previous;

		//iterate to the end of the list
		while (current.next) {
			previous = current;
			current = current.next;
		}

		//remove node
		previous.next = null;
		this.s--;

		return true;
	}

	/**
     * 
     * @param {Number} index index of the data to be removed
     * @returns {Boolean} true if data removed successfully
     * @description
     * Remove data from the given index
     * Time complexity: O(n)
     * Space complexity: O(1)
     */
	removeAt(index) {
		//if index is out of range
		if (index < 0 || index >= this.s) {
			return false;
		}

		//if index is first position
		if (index === 0) {
			this.removeFromBeginning();
			return true;
		}
		let current = this.head;
		let previous;
		let count = 0;

		//iterate to the position to remove
		while (count < index) {
			previous = current;
			current = current.next;
			count++;
		}

		//remove node
		previous.next = current.next;
		this.s--;

		return true;
	}

	/**
     * 
     * @param {Any} data element to be searched
     * @returns {Number} first index of the data
     * @description
     * function to find the index of the given data
     * Time complexity: O(n)
     * Space complexity: O(1)
     */
	indexOfFirst(data) {
		let current = this.head;
		let count = 0;
		while (current) {
			if (current.data === data) {

				//return when data is found at first time
				return count;
			}
			current = current.next;
			count++;
		}
		return -1;
	}


	/**
     * 
     * @param {Any} data element to be searched
     * @returns {Number} last index of the data
     * @description
     * function to find the last index of the given data
     * Time complexity: O(n)
     * Space complexity: O(1)
     */
	indexOfLast(data) {
		let current = this.head;
		let count = 0;
		let index = -1;
		while (current) {
			if (current.data === data) {
				//store the index at each iteration
				index = count;
			}
			current = current.next;
			count++;
		}
		//return the last index
		return index;
	}


	/**
     * 
     * @returns {Boolean} true if list is empty
     * @description
     * function to check if list is empty
     * Time complexity: O(1)
     * Space complexity: O(1)
     */
	isEmpty() {
		return this.s === 0;
	}

	/**
     * 
     * @returns {Number} size of the list
     * @description
     * function to get the size of the list
     * Time complexity: O(1)
     * Space complexity: O(1)
     */
	size() {
		return this.s;
	}


	/**
     * @description
     * function to print the list
     * Time complexity: O(n)
     * Space complexity: O(1)
     */
	printList() {
		let current = this.head;
		let list = '';
		list+='[';
		while (current) {
			list += current.data;
			if (current.next) {
				list += ',';
			}
			current = current.next;
		}
		list+=']';
		console.log(list);
	}


	/**
     * @description
     * function to reverse the list
     * Time complexity: O(n)
     * Space complexity: O(1)
     */
	reverse() {
		//three pointer approach
		let current = this.head;
		let previous = null;
		let next = null;
		while (current) {
			next = current.next;
			current.next = previous;
			previous = current;
			current = next;
		}
		this.head = previous;
	}  

}


//sample code to test the linked list
// let list = new LinkedList();

// list.insertAtBeginning(1);
// [1]

// list.insertAtBeginning(2);
// [2,1]

// list.insertAtEnd(5);
// [2,1,5]

// list.insertAtEnd(6);
// [2,1,5,6]

// list.insertAt(7, 2);
// [2,1,7,5,6]

// list.removeFromBeginning();
// [1,7,5,6]

// list.printList();
// [2,7,5,6]

// list.reverse();
// [6,5,7,2]

// list.printList();
// [6,5,7,2]
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const doubly_linked_list_1 = require('./doubly-linked-list');
const linked_list_1 = require('./linked-list');
const queue_1 = require('./queue');
const stack_1 = require('./stack');
const strucures = {
	// doubly-linked-list
	DoublyLinkedList: doubly_linked_list_1.DoublyLinkedList,
	DoublyLinkedListNode: doubly_linked_list_1.DoublyLinkedListNode,
	// linked-list
	LinkedList: linked_list_1.LinkedList,
	LinkedListNode: linked_list_1.LinkedListNode,
	LinkedListTest: linked_list_1.test,
	// queue
	Queue: queue_1.Queue,
	QueueNode: queue_1.QueueNode,
	queueTest: queue_1.test,
	// stack
	Stack: stack_1.Stack,
	StackNode: stack_1.StackNode,
	stackTest: stack_1.test,
};
exports.default = strucures;

import { DoublyLinkedList, DoublyLinkedListNode } from './doubly-linked-list';
import { LinkedList, LinkedListNode } from './linked-list';
import { Queue, QueueNode } from './queue';
import { Stack, StackNode } from './stack';
declare const strucures: {
	DoublyLinkedList: typeof DoublyLinkedList;
	DoublyLinkedListNode: typeof DoublyLinkedListNode;
	LinkedList: typeof LinkedList;
	LinkedListNode: typeof LinkedListNode;
	LinkedListTest: () => void;
	Queue: typeof Queue;
	QueueNode: typeof QueueNode;
	queueTest: () => void;
	Stack: typeof Stack;
	StackNode: typeof StackNode;
	stackTest: () => void;
};
export default strucures;

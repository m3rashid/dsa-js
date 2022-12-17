export declare class DoublyLinkedListNode<T> {
	_value: T;
	_next: DoublyLinkedListNode<T> | null;
	_prev: DoublyLinkedListNode<T> | null;
	constructor(data: T);
	get value(): T;
	get next(): DoublyLinkedListNode<T> | null;
	set next(node: DoublyLinkedListNode<T> | null);
	get prev(): DoublyLinkedListNode<T> | null;
	set prev(node: DoublyLinkedListNode<T> | null);
}
export declare class DoublyLinkedList<T> {
	_head: DoublyLinkedListNode<T> | null;
	_tail: DoublyLinkedListNode<T> | null;
	_length: number;
	constructor();
	get length(): number;
	isEmpty(): boolean;
	get tail(): DoublyLinkedListNode<T> | null;
	get head(): DoublyLinkedListNode<T> | null;
	push(data: T): void;
	insertAfter(prevNode: DoublyLinkedListNode<T>, data: T): void;
	insertBefore(node: DoublyLinkedListNode<T>, data: T): void;
	pop(): DoublyLinkedListNode<T>;
	deleteNode(node: DoublyLinkedListNode<T>): void;
	getNode(index: number): DoublyLinkedListNode<T> | null;
	toString(): string;
}

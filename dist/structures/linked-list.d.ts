export declare class LinkedListNode<T> {
	_data: T;
	_next: LinkedListNode<T> | null;
	constructor(data: T);
}
export declare class LinkedList<T> {
	_head: LinkedListNode<T> | null;
	_size: number;
	constructor();
	insertAtBeginning(data: T): boolean;
	insertAtEnd(data: T): boolean;
	insertAt(data: T, index: number): boolean;
	removeFromBeginning(): boolean;
	removeFromEnd(): boolean;
	removeAt(index: number): boolean;
	indexOfFirst(data: T): number;
	indexOfLast(data: T): number;
	isEmpty(): boolean;
	size(): number;
	printList(): void;
	reverse(): void;
}
export declare const test: () => void;

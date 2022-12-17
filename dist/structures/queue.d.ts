export declare class QueueNode<T> {
	_data: T;
	_next: QueueNode<T> | null;
	constructor(data: T);
}
export declare class Queue<T> {
	_front: QueueNode<T> | null;
	_rear: QueueNode<T> | null;
	_size: number;
	constructor();
	enqueue(data: T): boolean;
	dequeue(): boolean;
	front(): T | null;
	rear(): T | null;
	isEmpty(): boolean;
	size(): number;
	print(): string;
}
export declare const test: () => void;

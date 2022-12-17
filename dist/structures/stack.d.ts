export declare class StackNode<T> {
	_data: T;
	_next: StackNode<T> | null;
	constructor(data: T);
}
export declare class Stack<T> {
	_top: StackNode<T> | null;
	_size: number;
	constructor();
	push(data: T): boolean;
	pop(): boolean;
	top(): T;
	isEmpty(): boolean;
	size(): number;
	print(): string;
}
export declare const test: () => void;

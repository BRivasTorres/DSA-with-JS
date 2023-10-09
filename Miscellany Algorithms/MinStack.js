// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

class MinStack {
	constructor() {
		this.head = null;
	}

	push(val) {
		this.head = !this.head /* Space O(1) */
			? new Node(val, val, null)
			: new Node(val, Math.min(val, this.head.min), this.head);
	}

	pop() {
		this.head = this.head.next; /* Time O(1) */
	}

	top() {
		return this.head.val; /* Time O(1) */
	}

	getMin() {
		return this.head.min; /* Time O(1) */
	}
}

class Node {
	constructor(val, min, next) {
		this.val = val;
		this.min = min;
		this.next = next;
	}
}

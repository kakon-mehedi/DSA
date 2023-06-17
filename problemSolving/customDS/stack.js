// push(element) - add an element to the top of the stack
// pop() - remove the top most element from the stack
// peek() - get the value of the top element without removing it
// isEmpty() - check if the stack is empty
// size() - get the number of elements in the stack
// print() - visualize the elements in the stack

// Solution

// arr
// push
// pop
// peek() => get the last elemnt
// size

class Stack {
	push(val) {
		this._data.push(val);
	}
	pop() {
		this._data.pop();
	}

	isEmpty() {
		if (this._data.length < 1) {
			return true;
		} else {
			return false;
		}
	}

	size() {
		return this._data.length;
	}

	print() {
		console.log(this._data);
	}

	peek() {
		return this._data[this._data.length - 1];
	}

	constructor(arr) {
		this._data = arr || [];
	}
}

const myStack = new Stack([1, 2, 3, 4]);


// enque(element) // adding element at the first index
// dequeue() // remove element from the first index
// peek() // get the first item of the key
// lookup() // searching an item in the queue

class Queue {
	constructor(data) {
		this.data = data;

		this.head = {
			value: data,
			next: null,
		};

		this.tail = this.head;
		this.length = 1;
	}

	enqueue(value) {
		const newItem = {
			value: value,
			next: null,
		};

		const oldHead = this.head;

		this.head = newItem;
		this.head.next = oldHead;
		this.length++;
	}

	dqueue() {
		if (this.length > 1) {
			const currentHead = this.head;
			const nextHead = currentHead.next;
			this.head = nextHead;

			this.length--;
			return this;
		}
		this.head = null;
		return this.printQueue();
	}

	peek() {
		if (this.head !== null) {
			return this.head.value;
		} else {
			return 'No value exist in the queue';
		}
	}

	printQueue() {
		let arr = [];
		let currentNode = this.head;

		while (currentNode !== null) {
			arr.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return arr;
	}
}

const myQueue = new Queue(1);
myQueue.enqueue(2);
myQueue.dqueue();
myQueue.dqueue();
myQueue.enqueue(50);
myQueue.dqueue();
console.log(myQueue.peek());

console.log(myQueue.printQueue());

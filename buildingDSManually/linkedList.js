// Build a linked list 10--> 5 --> 16
// first element is called head, should have a next pointer value
// last element is called tail, should have next pointer value is null
// can append new value .append(15) will append a new node in the list at the end of the list
// can prepend, adding value to the beginning in the list
// can delete a value

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};

		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = {
			value: value,
			next: null,
		};

		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;

		return this;
	}

	prepend(value) {
		const currentHead = this.head;
		const newNode = {
			value: value,
			next: currentHead,
		};

		this.head = newNode;
		this.length++;
	}

	printList() {
		const arr = [];
		let currentNode = this.head;

		while (currentNode !== null) {
			arr.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return arr;
	}

	insert(index, value) {
		if (index == null || index == undefined) return;
		if (index >= this.length) return this.append(value);

		let leadNode = this.findLeadNode(index - 1);

		let newNode = {
			value: value,
			next: null,
		};
		const leadNodeOldNext = leadNode.next;
		leadNode.next = newNode;
		newNode.next = leadNodeOldNext;
		this.length++;

		return this.printList();
	}

	remove(index) {
		let isLastNode = false;
		if (index === undefined || index === null) return;
		if (index >= this.length) {
			index = this.length - 1;
			isLastNode = true;
		}

		let leadNode = this.findLeadNode(index - 1);

		if (isLastNode) {
			this.tail = leadNode;
			this.tail.next = null;
			this.length--;
		} else {
			const currentNode = leadNode.next;
			leadNode.next = currentNode.next;
			this.length--;
		}
	}

	reverse() {
		const currentLinkedList = this.printList();
		let index = currentLinkedList.length - 1;

		this.head = {
			value: currentLinkedList[index],
			next: null,
		};

		this.tail = this.head;

		while (index !== 0) {
			const newNode = {
				value: currentLinkedList[index - 1],
				next: null,
			};

			this.tail.next = newNode;
			this.tail = newNode;
			index--;
		}

		return this;
	}

	reverseByAnotherMethod() {
		if (!this.head.next) {
			return this.head;
		}

		let first = this.head;
		this.tail = this.head;
		let second = first.next;
		while (second) {
			const temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}

		this.head.next = null;
		this.head = first;
	}

	findLeadNode(index) {
		let count = 0;
		let currentNode = this.head;

		if (currentNode === undefined || currentNode === null) return;

		while (count !== index) {
			// created a O(n)
			currentNode = currentNode.next;
			count++;
		}

		return currentNode;
	}
}

const myLinkedList = new LinkedList(1);

myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.insert(30, 4);
myLinkedList.insert(31, 5);
myLinkedList.insert(2, 2.5);
myLinkedList.insert(1, 1.5);
myLinkedList.insert(10, 100);
myLinkedList.insert(11, 101);
myLinkedList.insert(11, 102);
myLinkedList.remove(30);
myLinkedList.insert(11, 500);
myLinkedList.insert(2, 501);
myLinkedList.remove(2);
myLinkedList.remove(20);
myLinkedList.append(200);
myLinkedList.insert(110, 500);

console.log(myLinkedList.printList());
console.log('<============ After Reversed ==========>');
//myLinkedList.reverse();
myLinkedList.reverseByAnotherMethod();
console.log(myLinkedList.printList());

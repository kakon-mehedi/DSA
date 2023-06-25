// root node
// insert()
// find()
// delete()

//          9
//      4        20
//  1      6    15  170

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					// left
					if (!currentNode.left) {
						currentNode.left = newNode;
						return;
					}

					currentNode = currentNode.left;
				} else {
					// right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return;
					}

					currentNode = currentNode.right;
				}
			}
		}
	}

	remove() {}

	find(value) {
		if (!this.root) return false;

		let currentNode = this.root;
		while (true) {
			if (value === currentNode.value) return currentNode;
			if (value < currentNode.value) {
                // left
				if (!currentNode.left) {
					return false;
				}
				currentNode = currentNode.left;
			} else {
				// right
				if (!currentNode.right) {
					return false;
				}

				currentNode = currentNode.right;
			}
		}
	}
}

function traverse(node) {
	const tree = { value: node.value };

	tree.left = node.left;
	tree.left === null ? null : traverse(node.left);

	tree.right = node.right;
	tree.right === null ? null : traverse(node.right);

	return tree;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(traverse(tree.root));
console.log(tree.find(4));


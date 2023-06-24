class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	set(key, value) {
		const address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		let newValue = [key, value];
		this.data[address].push(newValue);
	}

	get(key) {
		const address = this._hash(key);
		const currentBucket = this.data[address];

		if (currentBucket) {
			for (let bucket of currentBucket) {
				if (bucket[0] === key) return bucket[1];
			}
		}

		return;
	}

	keys() {
		const keyArr = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keyArr.push(this.data[i][0][0]); // No matter what, for searching key it will travers data.length O(n)
			}
		}

		return keyArr;
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length; // O(n)
		}

		return hash;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('taka', 5000);
console.log(myHashTable.get('taka'));

// What is the problem with that hash table ?
// address Collision in data array
// When working with low memory space, hashtable hashIndex can collide
// If it do collission then it will create O(n) to access/ get this data
// For searching keys it will create a O(n) complexity.
// Thats why for (let key in Object) loop is very very slow
// So for searching Object is not a good idea.

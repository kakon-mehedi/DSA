function insertionSort(arr) {
	let sortedArray = [];
	sortedArray.push(arr[0]);

	for (i = 1; i < arr.length; i++) {
		let currentElement = arr[i];
		for (j = i; j > 0; j--) {
			if (currentElement > sortedArray[j - 1]) {
				sortedArray[j] = currentElement;
				break;
			} else {
				sortedArray[j] = sortedArray[j - 1];
			}
		}
	}

	return sortedArray;
}

const arr = [-6, 20, 8, -2, 4, 7, 9, 2, -2, -5, -6, 7, 8, 9, 35, 24];

result = insertionSort(arr);
console.log(result);

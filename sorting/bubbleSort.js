const arr = [-6, 20, 8, -2, 4];

function bubbleSort(arr) {
	do {
        let swapped = false;
		for (i = 0; i <= arr.length - 2; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped
			}
		}
	} while (swapped);

	return arr;
}

console.log('Given array ' + arr);

const result = bubbleSort(arr);
console.log(result);

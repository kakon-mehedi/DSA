// make the piviot element
// take a pivot element
// break the main arr into left and right arr according to the pivot number
// if arr has a single element stop else repeat from line 1 with those left and right arr
// merge left arr, pivot, right arrr

let count = 0;

function quickSort(arr) {
	count++;
	console.log('Iteration number ' + count);
	console.log('Current arr = ' + arr);

	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[arr.length - 1];
	const leftArr = [];
	const rightArr = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			leftArr.push(arr[i]);
		} else {
			rightArr.push(arr[i]);
		}
	}

	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const numbers = [5, 2, 3, 7, 4];
const sortedNumbers = quickSort(numbers);
console.log(sortedNumbers);

// Merge sort
// [-6, 20, 8, -2, 4]

// 1. Divide the arrays into sub array unitl its length is 1
// read the full array, divide the arraylength / 2 with Math.floor for the non number value.  3, 2
// [-6,20] [8,-2,4]

const numbers = [-6, 20, 8, -2, 4];
let finalArr = numbers;

function mergeSort(numbersArr) {}

function divideTheArrayUntilItBecomesASingleArray(arr) {
	if (arr.length < 2) {
		return finalArr;
	}
	const middleIndex = Math.floor(arr.length / 2);
	const firstHalf = arr.slice(0, middleIndex);
	const secondHalf = arr.slice(middleIndex);

	finalArr = [...finalArr, firstHalf, secondHalf]	

	return (
		divideTheArrayUntilItBecomesASingleArray(firstHalf),
		divideTheArrayUntilItBecomesASingleArray(secondHalf)
	);
}

function merge(arr1, arr2) {
	return [...arr1, ...arr2];
}

const result = divideTheArrayUntilItBecomesASingleArray(numbers)
console.log(result);


const header = document.getElementById('header');
header.textContent = JSON.stringify(result);
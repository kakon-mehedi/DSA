const numberOfFibonacci = 3;
let defaultNumbersArr = [0, 1];

function fibonacci(defaultArr, numberOfFibonacci) {
	if (defaultArr.length === numberOfFibonacci) return defaultArr;
	const lastNumberIndex = defaultArr.length - 1;
	const lastPreviousIndex = lastNumberIndex - 1;
	const latestNumber =
		defaultArr[lastNumberIndex] + defaultArr[lastPreviousIndex];

	defaultArr.push(latestNumber);
	return fibonacci(defaultArr, numberOfFibonacci);
}

const result = fibonacci(defaultNumbersArr, numberOfFibonacci);
console.log(result);





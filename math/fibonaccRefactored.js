// Inconsistent variable naming: The variable defaultNumbersArr could be renamed to defaultArray to make it more descriptive.

// Unused constant: The numberOfFibonacci constant is defined but never used in the code. It seems unnecessary since the value is passed as a parameter to the fibonacci function.

// Inefficient recursion: The code uses recursion to calculate the Fibonacci sequence. While recursion is a valid approach, it can lead to performance issues for larger inputs. It would be better to use an iterative approach instead.

// Modifying function arguments: The fibonacci function modifies the defaultArr array passed as an argument. Modifying function arguments can make code harder to reason about and maintain. It's better to avoid modifying arguments and instead use local variables for calculations.

const numberOfFibonacci = 3;

function fibonacci(numberOfTerms) {
	if (numberOfTerms <= 0) return [];

	let fibonacciArray = [0, 1];
	while (fibonacciArray.length < numberOfTerms) {
		const lastNumber = fibonacciArray[fibonacciArray.length - 1];
		const secondLastNumber = fibonacciArray[fibonacciArray.length - 2];
		const nextNumber = lastNumber + secondLastNumber;
		fibonacciArray.push(nextNumber);
	}

	return fibonacciArray;
}

const result = fibonacci(numberOfFibonacci);
console.log(result);

// Or you can use for loop

function fibonacciAnother(n) {
	const fibArray = [1, 2];
	for (i = 2; i < n; i++) {
		fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
	}
	return fibArray;
}

result2 = fibonacciAnother(10);

console.log(result2);

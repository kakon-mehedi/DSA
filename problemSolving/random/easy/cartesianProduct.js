const C = [1, 2];
const D = [3, 4, 5];

function cartesianProduct(arr1, arr2) {
	const result = [];
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			result.push([arr1[i], arr2[j]]);
		}
	}

	return result;
}

const result2 = cartesianProduct(C, D);
console.log(result2);

// Time coplexity: O(m*n)

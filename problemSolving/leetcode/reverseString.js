// Leetcode problem No 344
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Solution

// get the last element
// pop
// if(arr.length < 1) break
//

const arr = ["H","a","n","n","a","h"];
let reverseArr = [];
function reverseString(arr) {
	if (arr.length < 1) {
		let result = reverseArr;
		reverseArr = [];
		return result;
	}
	reverseArr.push(arr[arr.length - 1]);
	arr.pop();
	return reverseString(arr);
}

console.log(reverseString(arr));

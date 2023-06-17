// Binary Search Algorithm
// Input will be an Array and a number that you want to search.
// Output will be the index number of the number that you searched
// If no number is exist on this array return 'Number not found in the Array'

const numbersArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const numbersArraySorted = numbersArray.sort((a, b) => {
  return +a - +b;
});

function binarySearch(sortedArray, desiredNumber) {
  let startIndex = 0;
  let endIndex = sortedArray.length;

  while (startIndex < endIndex) {
    let middleNumberIndex = Math.floor((startIndex + endIndex) / 2);

    if (sortedArray[middleNumberIndex] === desiredNumber) {
      console.log("Number found at index no " + middleNumberIndex);
      return middleNumberIndex;
    } else if (sortedArray[middleNumberIndex] > desiredNumber) {
      endIndex = middleNumberIndex;

      if (startIndex >= endIndex) {
        console.log("Number not found in the Array");
        return false;
      }
    } else if (sortedArray[middleNumberIndex] < desiredNumber) {
      startIndex = middleNumberIndex + 1;

      if (startIndex >= endIndex) {
        console.log("Number not found in the Array");
        return false;
      }
    }
  }
}

binarySearch(numbersArraySorted, 3);

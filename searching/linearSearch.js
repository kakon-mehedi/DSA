const numbers = [10, 50, 20, 40, 70];

function linearSearch(arr, desiredNumber) {
  let result = false;

  numbers.map((number, currentIndex) => {
    if (number === desiredNumber) {
      result = currentIndex;
    }
  });

  return result;
}

let searchResult = linearSearch(numbers, 10);

if (searchResult) {
  console.log("Number is in index no " + searchResult);
} else {
  console.log("Number not found");
}

function insertionSort(arr) {
    if (arr.length === 0) {
      return arr;
    }
  
    const sortedArray = [...arr];
  
    for (let i = 1; i < sortedArray.length; i++) {
      const currentElement = sortedArray[i];
      let j = i - 1;
  
      while (j >= 0 && sortedArray[j] > currentElement) {
        sortedArray[j + 1] = sortedArray[j];
        j--;
      }
  
      sortedArray[j + 1] = currentElement;
    }
  
    return sortedArray;
  }
  
  const arr = [-6, 20, 8, -2, 4, 7, 9, 2, -2, -5, -6, 7, 8, 9, 35, 24];
  const result = insertionSort(arr);
  console.log(result);
  
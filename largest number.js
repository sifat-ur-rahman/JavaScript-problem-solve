//Problem : Find the largest number in an array.

function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  
  const numbers = [4, 7, 2, 9, 1];
  console.log(findLargestNumber(numbers)); // Output: 9
  
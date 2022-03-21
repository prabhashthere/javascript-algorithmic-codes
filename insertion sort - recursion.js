// send first n-1 values of the list to recursion and then place the last value in the right spot.

let numbers = [78,23,-12,45,56,19,31,1,67];
function sortArray(numList) {
  if (numList.length <= 1) {
    return numList;
  } else {
    let lastVal = numList.pop();
    numList = sortArray(numList); // send first n-1 values of the list to recursion
    numList.push(lastVal); // push the last value to the already sorted list.
	// now placing last value at the correct spot
    let pointer = numList.length-1;
    while (pointer > 0 && numList[pointer -1] < numList[pointer] ) {
      let temp = numList[pointer-1]
      numList[pointer-1] = numList[pointer];
      numList[pointer] = temp;
      pointer--;
    }
  }
  return numList;
}

console.log(sortArray(numbers));
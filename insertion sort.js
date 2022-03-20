//we start sorting the array from left side to right one by one.
//take one element look for the elements in the left side to it.
//place the element in the right position of the left side.


let numbers = [78,23,-12,45,56,19,31,1,67];
function sortArray(numList) {
  for (var i=0; i < numList.length; i++) {
    let pointer = i;
    while (pointer > 0 && numList[pointer] < numList[pointer-1] ) {
      let temp = numList[pointer];
      numList[pointer] = numList[pointer-1];
      numList[pointer-1] = temp;
      pointer--;
    }
  }
  return numList;
}

console.log(sortArray(numbers));
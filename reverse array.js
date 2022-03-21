let numbers = [46,-12,45,31,19,46,32,1,54];

function reverse(numList) {
  for (var i=0; i<numList.length/2; i++) {
    swap(i, numList.length-i-1, numList);
  }
  return numList;
}

function swap(n1, n2, list) {
  let temp = list[n1];
  list[n1] = list[n2];
  list[n2] = temp;
}

console.log(reverse(numbers));
//finding min value of a list using recursion

let numbers = [11,2,4,14,88];
function getMin(numList) {
  let min = numList[0];
  if (numList.length <= 2) {
    if (numList.length == 1) {
      min = numList[0];
    } else {
      min = numList[0] < numList[1] ? numList[0] : numList[1];
    }
  } else {
    let middle;
    if (numList.length%2 == 0) {
      middle = numList.length/2;
    } else {
      middle = (numList.length + 1)/2
    }
    let min1 = getMin(numList.slice(0,middle));
    let min2 = getMin(numList.slice(middle,numList.lenght));
    min = min1 < min2 ? min1 : min2;
  }
  return min;
}
console.log(getMin(numbers));
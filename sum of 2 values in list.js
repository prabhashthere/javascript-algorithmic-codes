// we use two pointer approach

let numbers = [1,2,5,7,10,13,14,20,23,24];
let targetVal = 44;
function checkSum(numList, target) {
  let pOne = 0;
  let pTwo = numList.length - 1;
  while (pOne < pTwo) {
    if (numList[pOne] + numList[pTwo] == target) {
      console.log(numList[pOne], numList[pTwo])
      return true;
    } else if ((numList[pOne] + numList[pTwo]) < target) {
      pOne++;
    } else {
      pTwo--;
    }
  }
  return false;
}

console.log(checkSum(numbers, targetVal));
// find all duplicates in a list

let numbers = [78,45,-12,45,31,19,31,1,67];
function findDuplicate(numList) {
  const vals = new Set();
  for (var i=0; i < numList.length; i++) {
    if (vals.has(numList[i])) {
      console.log(numList[i]);
    } else {
      vals.add(numList[i]);
    }
  }
}

findDuplicate(numbers);
//we use a set
//insert ith value to set, before inserting we look whether the (target - ith value) is already in the set.
//if it is there in the set, then that pair is a correct match.

let numbers = [78,45,-12,45,31,19,31,1,58];
let target = 46;
function findPairs(numList) {
  const vals = new Set();
  for (var i=0; i < numList.length; i++) {
    if (vals.has(46 - numList[i])) {
      console.log(46 - numList[i], numList[i]);
    }
    vals.add(numList[i]);
  }
}

findPairs(numbers);
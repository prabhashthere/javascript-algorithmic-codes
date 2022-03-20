//Print all possible combinations of r elements in a given array of size n.
//using recursion.


let numbers = [1,2,3,4,5];
let setSize = 3;
function getAllSets(numList, size, setArray) {
  if (size > 2) {
    for (var i = 0; i < numList.length-1; i++) {
      setArray.push(numList[i]);
      getAllSets(numList.slice(i+1,numList.length),size-1,setArray);
      setArray.pop();
    }
  } else {
    for (var i = 0; i < numList.length-1; i++) {
      for (var j = i+1; j < numList.length; j++) {
        setArray.push(numList[i]);
        setArray.push(numList[j]);
        console.log(setArray);
        setArray.pop();
        setArray.pop();
      }
    }
  }
}

getAllSets(numbers, setSize, []);
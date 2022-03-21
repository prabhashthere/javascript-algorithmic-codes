let numbers = [-111,38,46,-12,45,31,19,46,32,1,58,111,31,31];

function swap(n1, n2, valList) {
  let temp = valList[n1];
  valList[n1] = valList[n2];
  valList[n2] = temp;
}

function quickSort(numList) {
  if (numList.length <= 1) {
    return numList;
  } else if (numList.length == 2){
    if (numList[0] > numList[1]) {
      swap(0, 1, numList);
    }
    return numList;
  } else {
	// we select 1st element as pivot and place it in the right spot
	// so that all elements in left side of the pivot is smallar and
	// all elements in the right size are larger than the pivot.
    let pivot = numList[0];
    let p1 = 1; // two pointer(p1, p2) approach
    let p2 = numList.length -1;
    let flag = false;
    while (!flag) { // we stop when the two pointers meet each other.
      while (p1 < numList.length) {
        if (numList[p1] > pivot) {
          break;
        } else {
          p1++;
        }
      }
      while (p2 > 0) {
        if (numList[p2] < pivot) {
          break;
        } else {
          p2--;
        }
      }
      if (p1>p2) {
		swap(0, p2, numList);
        flag = true;
      } else {
		swap(p1, p2, numList);
        p1++;
        p2--; 
	  }
    }
    let c = numList[p2]; // c is the correctly placed element
    //now we sort sub lists in the two sides of c.
    let list1 = quickSort(numList.slice(0,p2));
    let list2 = quickSort(numList.slice(p2+1, numList.length));
    list1.push(c);
    return list1.concat(list2);
  }
}

console.log(quickSort(numbers));
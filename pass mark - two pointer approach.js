let scores = [78,23,45,56,19,31,67];
function processList(scoreList) {
  let pointer = 0;
  let passMark = 50;
  for (var i=0; i < scoreList.length; i++) {
    if (scoreList[pointer] >= passMark) {
      scoreList.push(scoreList.splice(pointer,1)[0]);
    }
    else {
      pointer++;
    }
  }
  let failList = scoreList.splice(0,pointer).sort();
  let processedList = failList.concat(scoreList);
  return processedList;
}

console.log(processList(scores));


//Sort an array with the failing grades at the beginning in ascending order,
//followed by the passing grades. Order doesn't matter for the passing grades.

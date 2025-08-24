function sortArray(array) {
  let oddSort = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
      oddSort.push(array[i]);
    }
  }
  oddSort = oddSort.sort((a,b) => a - b);
  // console.log(oddSort);
  
  let all = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
      all.push(oddSort[0]);
      oddSort.shift();
    } else {
      all.push(array[i])
    }
  }
    console.log(all)
}

sortArray([5, 3, 2, 8, 1, 4]); // returns [1, 3, 2, 8, 5, 4]
sortArray([9, 8, 7, 6, 5]);    // returns [5, 8, 7, 6, 9]
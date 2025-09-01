function positiveSum(arr) {
  
  let sum = 0;
  for(let num of arr){
    if(num > 0){
      sum += num;
    }
  }
  return sum;
}

console.log(positiveSum([1, -4, 7, 12])) // 20  (1 + 7 + 12)
console.log(positiveSum([-1, -2, -3]))   // 0
console.log(positiveSum([0, 5, -3]))     // 5
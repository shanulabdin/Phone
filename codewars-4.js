function positiveSum(arr) {
  return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0)
}

console.log(positiveSum([1, -4, 7, 12])) // 20  (1 + 7 + 12)
console.log(positiveSum([-1, -2, -3]))   // 0
console.log(positiveSum([0, 5, -3]))     // 5
function sortArray(array) {
  let oddSort = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);
  return array.map(n => n % 2 !== 0 ? oddSort.shift() : n)
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // returns [1, 3, 2, 8, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5]));    // returns [5, 8, 7, 6, 9]
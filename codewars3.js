function sortOddDoubleEven(array){
  let sortOdd = array.filter(n => n % 2 !== 0).sort((a, b) => a - b);
  return array.map(n => n % 2 !== 0 ? sortOdd.shift() : n * 2);
}

console.log(sortOddDoubleEven([5, 3, 2, 8, 1, 4])); // returns [1, 3, 4, 16, 5, 8]
console.log(sortOddDoubleEven([9, 8, 7, 6, 5]));    // returns [5, 16, 7, 12, 9]
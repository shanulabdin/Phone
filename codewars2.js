function sortEven(array){
  let evenSort = array.filter(n => n % 2 === 0).sort((a , b) => a - b);
  return array.map(n => n % 2 === 0 ? evenSort.shift() : n)
}

console.log(sortEven([5, 3, 2, 8, 1, 4])); // returns [5, 3, 2, 4, 1, 8]
console.log(sortEven([9, 8, 7, 6, 5]));    // returns [9, 6, 7, 8, 5]
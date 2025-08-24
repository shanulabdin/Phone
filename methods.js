function sumArray(array){
  return array.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // returns 10
//===================================

function countEvens(array){
  return array.filter(num => num % 2 === 0).length
}

console.log(countEvens([1, 2, 3, 4, 5, 6])); // returns 3
//===================================

function reverseString(string){
  return string.split('').reverse().join('')
}

console.log(reverseString("hello")); // returns "olleh"
//===================================

function maxNumber(array){
  return Math.max(...array)
}

console.log(maxNumber([5, 12, 7, 1])); // returns 12
//===================================

function removeZeros(array){
  return array.filter(num => num !== 0)
}

console.log(removeZeros([0, 1, 0, 2, 3, 0])); // returns [1, 2, 3]
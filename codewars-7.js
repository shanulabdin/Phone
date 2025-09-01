function getShortWords(array){
  return array.filter((a) => a.length <= 5);
}


console.log(getShortWords(["apple", "banana", "kiwi", "grapefruit", "orange"]))
console.log(getShortWords(["cat", "dog", "mouse", "elephant"]))
Function getShortWords(array){
  let shortWords = [];
  for(let crr of array){
    if(crr.length <= 5){
      shortWords.push(crr)
    }
  }
  return shortWords;
}


console.log(getShortWords(["apple", "banana", "kiwi", "grapefruit", "orange"]))
console.log(getShortWords(["cat", "dog", "mouse", "elephant"]))
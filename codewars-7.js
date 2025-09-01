function getShortWords(array){
  return array.reduce((acc, crr) => {
    if(crr.length <= 5){
      acc.push(crr);
    }
    return acc;
  }, [])
}


console.log(getShortWords(["apple", "banana", "kiwi", "grapefruit", "orange"]))
console.log(getShortWords(["cat", "dog", "mouse", "elephant"]))
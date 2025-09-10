function findShort(sentence){
  let words = sentence.split(' ');
  let short = words[0].length;
  
  for(let i = 1; i < words.length; i++){
    if(words[i].length < short){
      short = words[i].length;
    }
  }
  return short;
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps") ) // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")) // 3
console.log(findShort("Let's travel abroad shall we"))  // 2


function getSum(a, b){
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sum = 0;
  
  for(let i = min; i <= max; i++){
    sum += i;
  }
  return sum;
}

console.log(getSum(2, 8));
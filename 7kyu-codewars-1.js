function pattern(n){
  if(n <=0){
    return '';
  }
  if(n % 2 === 0){
    n--;
  }
  
  let result = [];
  for(let i = 1; i <= n; i += 2){
    result.push(String(i).repeat(i))
  }
  
  return result.join('\n');
}
// console.log(pattern(-6))
// console.log(pattern(6))
// console.log(pattern(9))

function evenPattern(n){
  if(n <= 0){
    return '';
  }
  
  if(n % 2 !== 0){
    n--;
  }
  
  let result = [];
  for(let i = 2; i <= n; i += 2){
    result.push(String(i).repeat(i))
  }
  return result.join('\n');
}

// console.log(evenPattern(-9));
// console.log(evenPattern(9));
// console.log(evenPattern(8));


function reverseEvenPattern(n){
  if(n <= 0){
    return '';
  }
  
  if(n % 2 !== 0){
    n--;
  }
  
  let result = [];
  for(let i = n; i >= 2; i -= 2){
    result.push(String(i).repeat(i))
  }
  return result.join('\n');
}

// console.log(reverseEvenPattern(-9));
// console.log(reverseEvenPattern(9));
// console.log(reverseEvenPattern(8));

function pyramid(n){
  if(n <= 0){
    return '';
  }
  
  if(n % 2 === 0){
    n--;
  }
  
  let result = [];
  for(let i = 1; i <= n; i += 2){
    result.push((' ').repeat((n - i) / 2) + String(i).repeat(i));
  }
    return result.join('\n');
}

console.log(pyramid(-6));
console.log(pyramid(6));
console.log(pyramid(9));
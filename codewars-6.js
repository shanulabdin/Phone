function digitPowerSum(n) {
  
  // your code here
  let power = 1;
  let digits = String(n).split('');
  let raised = 0;
  
  for(let i = 0; i < digits.length; i++){
    raised += digits[i] ^ (digits[i].length + 1);
  }
  return raised;
}

console.log(digitPowerSum(123))  // 1^1 + 2^2 + 3^3 = 32
console.log(digitPowerSum(456))  // 4^1 + 5^2 + 6^3 = 4 + 25 + 216 = 245
console.log(digitPowerSum(89))   // 8^1 + 9^2 = 8 + 81 = 89

let num = 3
console.log(String(num))
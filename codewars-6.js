function digitPowerSum(n) {
  let digits = n.toString().split('').map(Number);
  let sum = 0;
  for(let i = 0; i < digits.length; i++){
    sum += digits[i] ** (i + 1);
  }
  return sum;
}

console.log(digitPowerSum(123))  // 1^1 + 2^2 + 3^3 = 32
console.log(digitPowerSum(456))  // 4^1 + 5^2 + 6^3 = 4 + 25 + 216 = 245
console.log(digitPowerSum(89))   // 8^1 + 9^2 = 8 + 81 = 89


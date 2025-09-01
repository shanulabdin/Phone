function disemvowel(str) {
  let vowels = 'AEIOUaeiou';
  let result = '';
  for(let crr of str){
    if(vowels.includes(crr)){
      result += '';
    } else {
      result += crr;
    }
  }
  return result;
}

console.log(disemvowel("This website is for losers LOL!"))
// "Ths wbst s fr lsrs LL!"

console.log(disemvowel("JavaScript"))
// "JvScrpt"

console.log(disemvowel("AEIOUaeiou"))
// ""
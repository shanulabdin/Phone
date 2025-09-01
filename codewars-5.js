function disemvowel(str) {
  return str.split('').filter(c => !'AEIOUaeiou'.includes(c)).join('');
}

console.log(disemvowel("This website is for losers LOL!"))
// "Ths wbst s fr lsrs LL!"

console.log(disemvowel("JavaScript"))
// "JvScrpt"

console.log(disemvowel("AEIOUaeiou"))
// ""
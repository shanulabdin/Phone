function morseToEnglish(morse){
  let english = '';
  
  let symbols = morse.split(' ');
  
  for(let base of symbols){
    switch(base){
      case '.-':
        english += 'A';
        break;
      case '-...':
        english += 'B';
        break;
      case '-.-.':
        english += 'C';
        break;
      case '-..':
        english += 'D';
        break;
      case '.':
        english += 'E';
        break;
      case '/':
        english += ' ';
        break;
      default:
        english += '';
        break;
    }
  }
  return english;
}

console.log(morseToEnglish('.- / -... / -.-. / -.. / .'))
console.log(morseToEnglish(".- -... -.-. -.. .")); 
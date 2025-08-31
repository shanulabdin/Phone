let continueProgram = true;

while (continueProgram){
  
 const evenOdd = Number(prompt('Write a number:'));
 
 if(evenOdd % 2 === 0){
   console.log(evenOdd + ' is Even')
 } else if (evenOdd % 2 !== 0){
   console.log(evenOdd + ' is Odd')
 }
 
 const userChoice = prompt('do you want to check again? yes/no')
 
 continueProgram = userChoice === 'yes';
}
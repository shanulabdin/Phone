function fooBar(num){
  for(let i = 1; i <= num; i++){
    let result = '';
    
    if(i % 4 === 0) result += 'foo';
    if(i % 6 === 0) result += 'bar';
    
    console.log(result || i)
  }
  
}

fooBar(30)
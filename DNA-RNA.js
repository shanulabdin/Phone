function dnaToRna(dna){
  dna = dna.toUpperCase();
  
  let rna = '';
  
  for(let crr of dna){
    switch(crr){
      case 'A':
        rna += 'U';
        break;
        
        case 'T':
          rna += 'A';
          break;
          
        case 'G':
          rna += 'C';
          break;
          
        case 'C':
          rna += 'G';
          break;
          
        default :
          rna += ' ';
          break;
    }
  }
  
  return rna;
}

let test = dnaToRna('ctga');
console.log(test);

function rnaToDna(rna){
  rna = rna.toUpperCase();
  
  let dna = '';
  
  for(let base of rna){
    switch(base){
      case 'U':
        dna += 'A';
        break;
        
      case 'A':
        dna += 'T';
        break;
        
      case 'C':
        dna += 'G';
        break;
        
      case 'G':
        dna += 'C';
        break;
      
      default:
        dna += ' ';
        break;
    }
  }
  
  return dna;
}


console.log(rnaToDna('uacg hg uacg'))
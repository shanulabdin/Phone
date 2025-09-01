function dnaToRna(dna) {
  // Make sure input is uppercase
  dna = dna.toUpperCase();

  // Replace each base with its RNA complement
  let rna = "";
  for (let base of dna) {
    switch (base) {
      case "A":
        rna += "U";
        break;
      case "T":
        rna += "A";
        break;
      case "G":
        rna += "C";
        break;
      case "C":
        rna += "G";
        break;
      default:
        rna += ""; // ignore invalid characters
    }
  }
  return rna;
}

// Example usage:
console.log(dnaToRna("TACGGTtca")); // Output: AUGCCAAGU

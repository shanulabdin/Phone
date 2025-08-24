class Animal {
  #age;

  constructor(name, age){
    this.name = name;
    this.#age = age;
  }

  getAge(){
    return this.#age
  }
  
  setAge(newAge){
    if(newAge > 0){
      this.#age = newAge;
    } else {
      console.log('Invalid Input')
    }
  }
}

class Lion extends Animal {
  eat(){
    console.log(`${this.name} is hunting`);
  }
}

// Test
const simba = new Lion("Simba", 5);
console.log(simba.getAge()); // should show 5

simba.setAge(7); // should update
console.log(simba.getAge()); // should show 7

simba.setAge(-3); // should not update (invalid)
console.log(simba.getAge()); // should show 7
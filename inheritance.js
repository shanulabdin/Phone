class Animal {
  constructor(name){
    this.name = name;
  }
  eat(){
    console.log(`${this.name} is eating`);
  }
  sleep(){
    console.log(`${this.name} is sleeping`);
  }
}

class Feline extends Animal {
  constructor(name, breed){
    super(name);
    this.breed = breed;
  }
  info(){
    console.log(`${this.name} is a ${this.breed}`);
  }
}

class Lion extends Feline {
  constructor(name, breed, region){
    super(name, breed);
    this.region = region;
  }
  eat(){
    console.log(`${this.name} is Hunting`);
  }
  info(){
    console.log(`${this.name} is a ${this.breed} from ${this.region}`)
  }
}

class Cat extends Feline {
  constructor(name, breed, color){
    super(name, breed)
    this.color = color;
  }
}

class Bird extends Animal {
  constructor(name, canFly){
    super(name);
    this.canFly = canFly;
  }
}

const simba = new Lion('Simba', 'Lion', 'Madagascar');
const haidar = new Lion('Haidar', 'Lion', 'Dubai');
simba.eat();
simba.sleep();
haidar.info();
console.log(simba);

const rambo = new Cat('Rambo', 'Stray', 'Karachi');
rambo.eat();
rambo.sleep();
rambo.info();
console.log(rambo);

const snowy = new Bird('Snowy', true);
snowy.eat();
snowy.sleep();
console.log(snowy);
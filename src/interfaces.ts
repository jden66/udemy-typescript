interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

// type is interface type.
let user1: Greetable;

// user1 variable has to Person interface defined property.
user1 = new Person("Max");
user1.greet("hello...!!");

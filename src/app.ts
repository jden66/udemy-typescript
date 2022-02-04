interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

// type is interface type.
let user1: Person;

// user1 variable has to Person interface defined property.
user1 = {
  name: "Max",
  age: 10,
  greet(phrase) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("hello...!!");

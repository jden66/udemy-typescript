class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // solution1. add parameter 'this' of Department type.
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("accounting");
accounting.describe();

// solution2. add property name of accountingCopy
const accountingCopy = { name: "dummy", describe: accounting.describe };
// this.name >> undefined. Because this.name's this is accountingCopy.
// accountingCopy hasn't name property.
accountingCopy.describe();

class Department {
  public name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  // solution1. add parameter 'this' of Department type.
  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// avoid this case. because.. your co-worker don't know this case(add employee method).
// employees property is 'private'
// accounting.employees[2] = "Anna";

// name property is 'public'
accounting.name = "NEW NAME";
accounting.describe();
accounting.printEmployeeInformation();

// solution2. add property name of accountingCopy
// const accountingCopy = { name: "dummy", describe: accounting.describe };
// this.name >> undefined. Because this.name's this is accountingCopy.
// accountingCopy hasn't name property.
// accountingCopy.describe();

class Department {
  // private readonly id: string;
  // public name: string;
  protected employees: string[] = [];

  // short cut initialize class
  constructor(private readonly id: string, public name: string) {}

  // solution1. add parameter 'this' of Department type.
  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    // this.id = "d2"; // error! Because id property is read-only property.
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Account");
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReport() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");

// avoid this case. because.. your co-worker don't know this case(add employee method).
// employees property is 'private'
// accounting.employees[2] = "Anna";

// name property is 'public'
it.name = "NEW NAME";
it.describe();
it.printEmployeeInformation();
console.log(it);

// new Object Account
const Account = new AccountingDepartment("d2", []);
Account.addReport("Something went wrong....");
Account.printReport();

Account.addEmployee("Max");
Account.addEmployee("Manu");
Account.printEmployeeInformation();

// solution2. add property name of accountingCopy
// const accountingCopy = { name: "dummy", describe: accounting.describe };
// this.name >> undefined. Because this.name's this is accountingCopy.
// accountingCopy hasn't name property.
// accountingCopy.describe();

class Department {
  // static variable
  static fiscalYear = 2022;
  // private readonly id: string;
  // public name: string;
  protected employees: string[] = [];

  // static method
  static createEmployee(name: string) {
    return { name };
  }

  // short cut initialize class
  constructor(private readonly id: string, public name: string) {
    // static 변수, 메서드는 this로 접근이 불가. this는 인스턴스에 종속되어 사용되므로, this에는 fiscalYear가 존재하지 않음
    // console.log(this.fiscalYear)
    // static 변수를 사용하기 위해서는 클래스 이름으로 접근해야한다.
    console.log("static variable 접근 --", Department.fiscalYear);
  }

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
  private lastReport: string;

  get mostLastReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report found.");
  }

  set mostLastReport(value) {
    if (!value) {
      throw new Error("Please pass new report.");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Account");
    this.lastReport = reports[0];
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }
}
// use static method -> 인스턴스 생성을 하지 않아도 클래스에서 바로 접근 가능
console.log(Department.createEmployee("Max"), Department.fiscalYear);

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
// Account.addReport("Something went wrong....");

// set 구문을 이용한 메서드를 호출할 경우(세터), 함수형태가 아닌, 등호를 이용해서 값을 넣어야 한다.
Account.mostLastReport = "Something went wrong....";
// 공백은 에러되도록 세터에서 처리함(예외 발생)
// Account.mostLastReport = "";

// get 구문을 이용한 메서드를 호출할 경우(게터) 함수구문처럼 호출하지 않는다.
console.log(Account.mostLastReport);
Account.printReport();

Account.addEmployee("Max");
Account.addEmployee("Manu");
Account.printEmployeeInformation();

// solution2. add property name of accountingCopy
// const accountingCopy = { name: "dummy", describe: accounting.describe };
// this.name >> undefined. Because this.name's this is accountingCopy.
// accountingCopy hasn't name property.
// accountingCopy.describe();

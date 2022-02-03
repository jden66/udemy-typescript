// change abstract class - this class can't create instance. because this class is abstract class
abstract class Department {
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
  constructor(protected readonly id: string, public name: string) {
    // static 변수, 메서드는 this로 접근이 불가. this는 인스턴스에 종속되어 사용되므로, this에는 fiscalYear가 존재하지 않음
    // console.log(this.fiscalYear)
    // static 변수를 사용하기 위해서는 클래스 이름으로 접근해야한다.
    console.log("static variable 접근 --", Department.fiscalYear);
  }

  // solution1. add parameter 'this' of Department type.
  // change abstract method
  // return type as possible anything
  abstract describe(this: Department): void;

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

  describe() {
    console.log("IT Department ID: ", this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  // this constructor is no longer create instance
  private constructor(id: string, private reports: string[]) {
    super(id, "Account");
    this.lastReport = reports[0];
  }

  // 생성된 인스턴스가 있는지 확인하고 없으면 새 인스턴스를 반환해준다. 있으면 기존의 인스턴스를 반환해준다.(오직 한개만 생성)
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

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

  // this method is inheritance method. and this method is required materialize.
  describe(): void {
    console.log("Accounting Department ID: ", this.id);
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
// const Account = new AccountingDepartment("d2", []);
// AccountingDepartment class is Singleton class.
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
// Account.addReport("Something went wrong....");

// accounting and accounting2 is same instance.
console.log(accounting, accounting2)
// set 구문을 이용한 메서드를 호출할 경우(세터), 함수형태가 아닌, 등호를 이용해서 값을 넣어야 한다.
accounting.mostLastReport = "Something went wrong....";
// 공백은 에러되도록 세터에서 처리함(예외 발생)
// accounting.mostLastReport = "";

// get 구문을 이용한 메서드를 호출할 경우(게터) 함수구문처럼 호출하지 않는다.
console.log(accounting.mostLastReport);
accounting.printReport();

accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();

// solution2. add property name of accountingCopy
// const accountingCopy = { name: "dummy", describe: accounting.describe };
// this.name >> undefined. Because this.name's this is accountingCopy.
// accountingCopy hasn't name property.
// accountingCopy.describe();

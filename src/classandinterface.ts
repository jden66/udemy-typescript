/**
 * intersectiono type - use interface keyword
 */

interface Admin {
  name: string;
  privileges: string[];
}
interface Employee {
  name: string;
  startDate: Date;
}

/**
 * intersectiono type - use type keyword
 */
// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// this type is intersection type. (use interface)
type AEmployee = Admin & Employee;
// interface BEmployee = Admin & Employee; // wrong
// this interface is intersection type. (use interface)
interface CEmployee extends Admin, Employee {}

const e1: AEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

const e3: CEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // & operator. common type is number.

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("name: " + emp.name);
  // console.log("privileges: " + emp.privileges); // error
  if ("privileges" in emp) {
    console.log("privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("start date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("drive...");
  }
}

class Truck {
  drive() {
    console.log("drive...");
  }
  loadCargo(cargo: string) {
    console.log("drive the cargo...");
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // vehicle.loadCargo('something') // wrong
  // first. use if's 'in' keyword
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo('something');
  // }

  // second. use instanceof
  if (vehicle instanceof Truck) {
    vehicle.loadCargo("something");
  }
}

useVehicle(v1);
useVehicle(v2);

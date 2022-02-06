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

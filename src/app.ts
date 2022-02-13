// // const names = ["Max", "Maneul"];
// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is Done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" "); // js에서는 data에 대한 정보가 없으므로, 아무것도 할 수가 없다.
//   // 하지만 promise 상수 변수에 Promise<string>으로 제네릭으로 반환타입 정보를 적어놨기 때문에, split을 미리 사용할 수 있다.
// });

// case1. no use generic
// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }
// case2. use generic
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// case3. ㅕuse restriction generic type is restriction
// T & U is resitricted 'object' type.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: "abc" }, { age: 30 }));
// const mergeObj = merge({ name: "abc", hobbies: ["sports"] }, { age: 30 });

// case3. second argument is object -> number >> ERROR
// const mergeObj = merge({ name: "abc", hobbies: ["sports"] }, 30);
const mergeObj = merge({ name: "abc", hobbies: ["sports"] }, { age: 30 });

// case1. don't access age property
// case2. access age propergy
// case3. occur error access age property. because merge func return obj is don't know age property..
console.log(mergeObj.age);

interface Lengthy {
  length: number;
}

// 일반 제네릭 함수이지만, 제네릭 타입을 주면서, 매개변수의 length타입을 필수적으로 검사하게 한다.
// 이를 통해, 매개변수를 감시할 수 있는데, 적어도 element로 들어오는 매개변수에는 length라는 프로퍼티가 필수적으로 존재해야 함을 사전에 확인할 수 있다.
// 반환 타입까지 명시해주면, 제일 베스트 하게 함수를 완성할 수 있다.
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let elementDescription = "Got no value.";
  if (element.length === 1) {
    elementDescription = `Got 1 value.`;
  } else if (element.length > 1) {
    elementDescription = `Got ${element.length} value.`;
  }
  return [element, elementDescription];
}

console.log(countAndDescribe("abcd"));

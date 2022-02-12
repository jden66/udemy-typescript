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
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: "abc" }, { age: 30 }));
const mergeObj = merge({ name: "abc", hobbies: ["sports"] }, { age: 30 });

// case1. don't access age property
// case2. access age propergy
console.log(mergeObj.age);

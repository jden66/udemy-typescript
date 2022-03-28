// const names = ["Max", "Manual"];

const names: Array<string> = [];
// 이렇게 하면, names에 들어간 모든 배열은 string의 메서드를 사용하더라도 컴파일 에러가 나지 않는다.
names[0].split("-");
// names을 제네릭(string)타입으로 지정하고

// promise함수를 리턴할 때, 반환타입을 적어주지 않아도 소스는 동작하지만, 컴파일 에러가 발생한다.
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is promise return str");
  }, 2000);
});

promise.then((data) => {
  // 만약 promise 변수의 반환타입이 없었더라면, data는 unknown타입으로 정의되어 split함수를 쓸 수 있는지 알지 못함
  // 현재는 promise
  data.split("");
});

/**
 * step 2. create generic func
 * @param objA
 * @param objB
 * @returns
 */
// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }
// merge함수의 결과로 하나의 객체를 묶을 수 있지만,
// 문제는 타입스크립트에서 merge의 리턴으로 받은 객체에 정보를 알 수가 없다는 것.
// const mergeObj = merge({ name: "mark" }, { age: 30 });
// console.log(mergeObj.name)

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// 제네릭으로 타입을 지정해줌으로서 반환타입이 T랑 U의 인터섹션 타입이라는 것을 알 수 있다.
// 타입스크립트가 인식할 수 있도록 해주는 방식이라고 보면 될듯
// T에 객체의 형태를 지정해놓으면.. 그 형태를 따라야만 하기 때문에, T로 명명해 유연하게 사용할 수 있게 한 것.
const mergeObj = merge({ name: "mark" }, { age: 30 });
console.log(mergeObj.age);

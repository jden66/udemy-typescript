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

// Thare are 3 state of promise
// 1. pending
// 2. resolved
// 3. rejected

const myPromise = new Promise((resolve, reject) => {
  const user = { id: 1 };
  if (!user) {
    reject("Something Went Wrong!");
  } else {
    setTimeout(() => {
      //   resolve("Successfully Got the data");
      resolve({ name: "Md. Mohon" });
    }, 1000);
  }
});

const userIds = [1, 2, 3, 4, 5];
let userData = [];
for (let i = 0; i < userIds.length; i++) {
  const userId = userIds[i];
  userData.push(myPromise);
}

Promise.all(userData).then((res) => {
  console.log(res);
});

myPromise
  .then((res) => console.log("Found in then", res))
  .catch((error) => console.log("Found in catch", error));
console.log("Done");

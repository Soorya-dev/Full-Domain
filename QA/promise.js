//! Promises are objects that represent the eventual completion (or failure) of an asynchronous operation.

//? let we take an example bus waiting scenario

let busPromise = new Promise((resolve, reject) => {
  let busArrived = false;
  if (busArrived) {
    resolve("The bus has arrived");
  } else {
    reject("The bus was canceled");
  }
});

busPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("waiting for bus is over");
  });

//* resolve is called when the bus arrives, fulfilling the promise.
//* reject is called when the bus is canceled, rejecting the promise.
//* then handles the resolved state (bus arrives).
//* catch handles the rejected state (bus canceled).

//! Promise.all()

//* The Promise.all() method in JavaScript is used to handle multiple promises concurrently.
//* It takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved, or rejects when any one of the promises in the array rejects.

//? If all promises resolve: Promise.all() resolves with an array of the resolved values.
//? If any promise rejects: Promise.all() immediately rejects with the reason of the first promise that rejects.

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise one is resolved");
  }, 3000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise two is resolved");
  }, 2000);
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise three is resolved");
  }, 1000);
});

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log("all promise resolved");
    console.log(result);
  })
  .catch((error) => {
    console.error("one of the promise is rejected");
    console.error(error);
  });

//! Promise.allsettled()

//* Purpose: Waits for all promises in an array to settle (either resolve or reject).
//* Returns: A single promise that resolves with an array of objects describing the outcome of each promise.
//* Use Case: When we need to know the result of all promises regardless of whether they resolved or rejected.

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("fulfilled:", result.value);
    } else {
      console.log("Rejected:", result.reason);
    }
  });
});

//! Promise.any()

//* Purpose: Waits for the first promise to resolve, ignoring rejected promises.
//* Returns: A single promise that resolves with the value of the first fulfilled promise.
//* Use Case: When you need the fastest successful result from a group of promises.
//* Rejection: If all promises reject, it rejects with an AggregateError containing all rejection reasons.

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log("First fulfilled:", value);
  })
  .catch((error) => {
    console.error("all promise rejected", error.errors);
  });

//! Promise.race()

//* Purpose: Waits for the first promise to settle (either resolve or reject).
//* Returns: A single promise that settles with the value or reason of the first settled promise.
//* Use Case: When you need the fastest result, whether it's success or failure.

Promise.race([promise1, promise2, promise3])
  .then((value) => {
    console.log("First fulfilled:", value);
  })
  .catch((error) => {
    console.error("all promise rejected", error.errors);
  });

//? Promise.allSettled: Useful for handling the results of multiple promises when you need to process each result regardless of success or failure.
//? Promise.any: Ideal for cases where you only care about the first successful result, ignoring failures unless all fail.
//? Promise.race: Best for situations where the earliest result (whether success or failure) is the most important.
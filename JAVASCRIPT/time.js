let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);
  if (count === 5) {
    clearInterval(intervalId); // stop after 5 times
  }
}, 1000);

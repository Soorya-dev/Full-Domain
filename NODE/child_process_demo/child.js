// child.js
//! fork

// Listen for message from parent
process.on("message", (msg) => {
  console.log("Message from parent:", msg);

  // Reply back
  process.send("Hello back from child!");
});






// process → represents the current Node process

// process.on('message', callback) → listens for messages from the parent process

// process.send() → sends a message back to the parent

// console.log() → prints to the child’s stdout
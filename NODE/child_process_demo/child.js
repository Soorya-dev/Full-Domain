// child.js
//! fork

// Listen for messages from parent
process.on('message', (msg) => {
    console.log('Child received:', msg);

    // Send a reply back to parent
    process.send('Hello from child!');
});

// Optional: some console output
console.log('Child process started');




// process → represents the current Node process

// process.on('message', callback) → listens for messages from the parent process

// process.send() → sends a message back to the parent

// console.log() → prints to the child’s stdout
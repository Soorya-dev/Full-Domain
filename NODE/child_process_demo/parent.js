const { fork } = require("child_process");

// Fork (create) a child process running worker.js
const child = fork("child.js");

// Send a message to the child
child.send("Hello from parent!");

// Listen for messages from the child
child.on("message", (msg) => {
  console.log("Message from child:", msg);
});




















// const { fork, spawn } = require('child_process'); // Import fork & spawn from child_process module
// const path = require('path'); // For creating file paths

// // ----------------- FORK EXAMPLE -----------------
// const childPath = path.join(__dirname, 'child.js'); // Absolute path to child.js
// const child = fork(childPath); // Start child.js in a separate Node process

// // Send a message to the forked child
// child.send('Hello from parent!');

// // Listen for message from child
// child.on('message', (msg) => {
//     console.log('Parent received:', msg);
// });

// // ----------------- SPAWN EXAMPLE -----------------
// console.log('Running spawn example:');

// // Spawn a child process to run a system command (list files)
// // 'ls' on Linux/Mac, 'dir' on Windows
// const command = process.platform === 'win32' ? 'dir' : 'ls';
// const spawned = spawn(command, [], { shell: true });

// // Listen for output from spawned process
// spawned.stdout.on('data', (data) => {
//     console.log(`Spawn output:\n${data}`);
// });

// // Listen for errors
// spawned.stderr.on('data', (data) => {
//     console.error(`Spawn error:\n${data}`);
// });

// // Detect when the spawned process exits
// spawned.on('close', (code) => {
//     console.log(`Spawned process exited with code ${code}`);
// });









// fork

// fork(childPath) → runs another Node script as a separate process

// Returns a ChildProcess object

// Communication possible via send/message

// child.send(msg)

// Sends a message from parent → child

// child.on('message', callback)

// Receives a message from child → parent

// spawn

// spawn(command, args, options) → runs a system command or script

// command → command to run (e.g., ls, node)

// args → array of arguments

// options.shell = true → needed on Windows for shell commands like dir

// spawned.stdout.on('data', callback)

// Listens to child output (console.log in child or command output)

// spawned.stderr.on('data', callback)

// Listens for errors from child process

// spawned.on('close', callback)

// Runs when child process finishes execution

// code → exit code (0 = success)
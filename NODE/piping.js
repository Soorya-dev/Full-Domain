const fs = require('fs');

// Read from input.txt and write to output.txt
const readable = fs.createReadStream('input.txt');
const writable = fs.createWriteStream('output.txt');

// Pipe data
readable.pipe(writable);

console.log('Piping done!');

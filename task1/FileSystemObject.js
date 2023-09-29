// The "fs" module provides an API for interacting with the file system.
// It allows you to read, write, and manipulate files and directories.

const fs = require("fs");

// Read a file.
fs.readFile("example.rtf", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

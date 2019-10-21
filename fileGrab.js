const fs = require("fs");
const directory = ".";
const workingArr = [];

fs.readdir(directory, (err, files) => {
  files.forEach(file => {
    if (file === "competent") {
    } else {
      workingArr.push(file);
    }
  });
  let ran = Math.floor(Math.random() * (workingArr.length - 0 + 1)) + 0;
  console.log(workingArr[ran]);
});

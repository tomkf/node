const fs = require("fs");
const printDir = (dirName, extension, readDir) => {
  fs.readdir(dirName, (err, files) => {
    if (err) {
      readDir(err, dirName);
    } else {
      let filterFiles = [];
      files.forEach(file => {
        if (file.substr(file.length - 3) === extension) {
          filterFiles.push(file);
        }
      });
      readDir(err, filterFiles);
    }
  });
};

const readDir = (err, data) => {
  if (err) {
    return "error 404";
  } else {
    let read = "";
    data.forEach(element => {
      read += element + " " + "\n" + " ";
    });
    return read;
  }
};

module.exports = { printDir: printDir };

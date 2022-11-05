const process = require ('process');
const fs = require("fs");
const path = require("path");
const { stdin, stdout } = require('process');
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });

const p = path.join(__dirname, 'text.txt');

function writeExit(text) {
  if (text.indexOf('exit') !== -1) {
    console.log('Good bye');
    process.exit();
}
}
  process.on('beforeExit', (code) => {
    console.log('Good bye');
  });

function writeFile (text) {
  fs.open(p, 'w', (err) => {
    if(err) throw err;
    console.log(`Please write text: `);
  })
  readline.on('line', (text) => {
    writeExit(text);
    fs.appendFile(p, text + '\n', (err) => {
      if (err) return;
    });
  });
  }
writeFile();
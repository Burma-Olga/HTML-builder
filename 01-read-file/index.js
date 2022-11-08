const fs = require("fs");
const path = require("path");

const p = fs.createReadStream(path.join(__dirname, 'text.txt'), "utf8");

p.on('data', (data) => {
  console.log(data);
});

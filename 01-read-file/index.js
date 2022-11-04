const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, 'text.txt');
fs.readFile(p, "utf8", (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
})
const path = require("path");
const fs = require("fs/promises");

const p = path.join(__dirname + '/secret-folder/');

async function readFolder(){
  const files = await fs.readdir(p);
  let number = 0;
  for await (let info of files) {
    const stat = await fs.stat(p + info)
    if (stat.isFile()) {
      console.log(
        path.basename(info, path.extname(info)) + ' - ' + 
        (path.extname(info)).slice(1) + ' - ' + 
        (stat.size / 1024).toFixed(3) + 'kb'
      );
      number += 1;
    }
  }
}

readFolder();
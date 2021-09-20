const path = require('path');

const a1 = path.basename('C:\\dekstop\\myfile.html');
const a2 = path.dirname('C:\\desktop\\myfile.html');
console.log(a1)
console.log(a2)


const a3 = path.extname(__filename)
console.log(a3)
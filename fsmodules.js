
const fs = require('fs');

// fs.readFile('file.txt', 'utf-8', (err, data)=>{
//     console.log(err,data)
// });


// const a  = fs.readFileSync("file.txt")
// console.log(a.toString())

fs.writeFile("file2.txt","This is Data 2",()=>{

console.log("Writeen to the file")
});

console.log("Finshed reading file")
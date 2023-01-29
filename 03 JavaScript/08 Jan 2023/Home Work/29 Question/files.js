// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

// let fileExtension = "";
// function extension(filename) {
//     for(let i = 0; i <=filename; i++) {
//         if(filename[i] == ".") {
//             fileExtension+= filename[i]+filename[filename.length];
//         }
//     }
//     return fileExtension;
// }

// console.log(extension("pankaj.exe"));

let filename = "pankaj.exe";
let fileExtension = "";
for(let i = filename.length -1; i >= 0; i--) {
  if(filename[i] === ".") {
    fileExtension = filename.substring(i);
    break;
  }
}
console.log("The file extension is: " + fileExtension);

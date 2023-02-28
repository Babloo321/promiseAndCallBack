const fs = require("fs");
// fs.readFile("f1.txt", cb1);
// console.log("before data: ");
// function cb1(err, res){
//     if(err){
//         console.log("error: " + err );
//     } else{
//         console.log("response: " + res);
//         fs.readFile("f2.txt", cb2);
//     }
// }
// function cb2(err, res){
//     if(err){
//         console.log("error of cb2: " + err)
//     } else {
//         console.log("response of cb2: " + res);
//     }
//     console.log("data printed")
// }

console.log("after call back function:  Jai Shree Ram");

console.log("this is for working checking");
fs.copyFile("f1.txt", "f6.txt");
fs.readFile("f6.txt", cb);
function cb(err, res){
    if(err){
        console.log('err' + err);
    } else{
        console.log("response: " + res);
    }
}

// console.log("f6: " + f6.txt);
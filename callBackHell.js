const fs = require("fs");
// fs.readFile("f1.txt", function cb1(err, res){
//     if(err){
//         console.log("f1 error: ", err);
//     } else{
//         console.log("f1 response: " + res);
//         fs.readFile("f2.txt", function cb2(err, res){
//             if(err){
//                 console.log("f2 error: ", err);
//             } else{
//                 console.log("f2 response: " + res);
//                 fs.readFile("f3.txt", function cb3(err,res){
//                     if(err){
//                         console.log("f3 error: ", err);
//                     } else{
//                         console.log("f3 response: " + res);
//                         console.log("all data is printed");
                       
//                     }
//                 });
//             }
//         });
//     }
// })

// printed synchronousely data using Asynchronous method, but it so difficult to read so

// Here is the two way to overcome the call back hell
//1. to seperate the function to overcome the callback hell
// fs.readFile("f1.txt", cb1);
// function cb1(err, res){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(res + "");
//         fs.readFile("f2.txt", cb2);
//     }
// }

// function cb2(err, res){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(res + " ");
//         fs.readFile("f3.txt", cb3);
//     }
// }

// function cb3(err, res){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(res + " ");
//         console.log("All Data is Printed");
//     }
// }


// method to read the file parallely 
// jiska pehle file read karke aayega uska pehle data print hoga
fs.readFile("f1.txt", cb);
fs.readFile("f2.txt", cb);
fs.readFile("f3.txt", cb);
function cb(err, res){
    if(err){
        console.log(err);
    } else{
        console.log(res+" ");
    }
}
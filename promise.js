const fs = require("fs");

let firstReadFilePromise = fs.promises.readFile("f1.txt");
function cb1(data){
    console.log("" + data);
    let f2ReadPromise =fs.promises.readFile("f2.txt");
    return f2ReadPromise;
}

function cb2(data){
    console.log(" " + data);
    let f3ReadFilePromise = fs.promises.readFile("f3.txt");
    return f3ReadFilePromise;
}

function cb3(data){
    console.log("" + data);
    console.log("all data are already read");
}
firstReadFilePromise
.then(cb1)
.then(cb2)
.then(cb3)
.catch(function(err){
    console.log(err);
})
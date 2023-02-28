
// function yolo(){
//     var a = 10;
//     function cb(){
//         console.log("hello How are you?");
//     }
//     //function to be executed (callback fun). time after which cb to be executed
//     // 1sec = 1000 milli sec
//     // 5sec = 5000 milli sec
//     setTimeout(cb, 5000);
//     console.log(a);
// }
// yolo();



// {
//     function yolo(){
//         var a = 10;
//         function cb(err, res){
//             if(err){
//                 console.log(err);
//             } else{
//                 console.log("Heloo How are you?");
//             }
//         }
//         setTimeout(cb, 5000);
//         console.log(a);
//     }
//     yolo();
//     let b = 100;
//     console.log(b);
// }


// const request = require("request");
// let url = "https://www.worldometers.info/coronavirus/"
// function yolo(){
//     var a = 10;
//     function cb(err, res, body){
//         if(err){
//             console.log(err);
//         } else{
//             console.log("hello How are you?");
//             console.log("statusCode is ", res.statusCode);
//         }
//     }

//     request(url, cb);
//     console.log(a);
// }
// yolo();
// let b = 100;
// console.log(b);

// for(let i = 1; i <= 10; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 2000*i);
// }

// for(var i = 1; i <= 10; i++){
//     function outer(a){
//         setTimeout(function(){
//             console.log(a);
//         }, 2000*a);
//     }
//     outer(i);
// }

// console.log("before");
// setTimeout(function(){
//     console.log("game is over");
// }, 4000);
// console.log("after");

console.log("before");
setTimeout(function(){
    console.log("time over");
}, 3000);
fetch("https://jsonplaceholder.typiocode.com/todos/1")
.then(function(response){
    return response.json()
})
.then(function(json){
    console.log(json);
})
.catch((err)=>{
    console.log(err);
});
console.log("after");
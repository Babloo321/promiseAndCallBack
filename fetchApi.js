
// const fetch = require("fetch");
// console.log("before")
// setTimeout(() => {
//     console.log("time out")
// }, 5000);
// console.log("after")

// const { default: fetch } = require("node-fetch");

console.log("before")
setTimeout(function(){
    console.log("time out")
}, 5000);


fetch("https://jsonplaceholder..com/1")
.then((response)=> response.json())
.then((json)=> console.log("this is fetch output " + json));

console.log("after");
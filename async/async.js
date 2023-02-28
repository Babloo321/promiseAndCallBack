// for async/await use async keyword it always return a promise
// async function f(){
//     return 3;               // it return any thing like a value, string, array, and function
// }
// console.log(f());

async function f(){
    return "babloo";
}
// f() function return a promise, or we can say ki async return a promise
let fpromise = f();
fpromise.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})
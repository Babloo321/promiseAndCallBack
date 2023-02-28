async function f(){
    let promise = new Promise((resolve, reject) =>{
        setTimeout(() => resolve("done"), 5000)
    })
    let result = await promise;     //The keyword await makes JavaScript wait until that promise settles and returns its result.
    console.log("babloo");
    console.log("" + result);
}
f();
console.log("outside the scope");


// The function execution “pauses” at the line 22 and resumes when the promise settles, with result
//  becoming its result
console.log("it is before outside async await function");
async function self(){
    let newPromise = new Promise((resolve, reject) =>{
        setTimeout(function resolve(){
            return "done!";
        }, 5000)
    }); 
    let awaitResult = await newPromise;
    console.log("i am await function");
    console.log("this is async setTimeout result " + awaitResult);
}
self();
console.log("this is the outside the scope of async await function");
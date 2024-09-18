// // f1 - 3
// // f2 - 4
// // f3 - 5
// //f1 f2 f3
// // program 2
let proOne = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(` user one create`)
    },1000);
})

let protwo = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(` user two create`)
    },2000);
})

let prothree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(` user three create`)
    },3000);
})

let profour = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(` user four create`)
    },3000);
})


// Promise combinator -- parallel excution 
// Promise .all 

Promise.all([proOne,protwo,prothree,profour])
.then(function(arr){
    console.log(arr)
})
.catch(function(err){
    console.log(err)
})



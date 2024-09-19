// // f1 - 3
// // f2 - 4
// // f3 - 5
// //f1 f2 f3
// // program 2
// let proOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve(` user one create`)
//     },1000);
// })

// let protwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve(` user two create`)
//     },2000);
// })

// let prothree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve(` user three create`)
//     },3000);
// })

// let profour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve(` user four create`)
//     },3000);
// })


// // Promise combinator ----- parallel execution  
// // Promise.all()

// Promise.all([proOne,protwo,prothree,profour])
// .then(function(arr){
//     console.log(arr)
// })
// .catch(function(err){
//     console.log(err)
// })


// promise.allsettle()

// proOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('user one created')
//     },1000);
// })

// protwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        resolve('user two created') 
//     },2000);
// })

// prothree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        resolve ('user three creted') 
//     },3000);
// })

// profour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        reject ('user four created ') 
//     },3000);
// })

// Promise.allSettled([proOne,protwo,prothree,profour])
// .then(function(arr){
//     console.log(arr)
// })


// // promise .race()
// proOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        resolve('user one ceated') 
//     },2000);
// })

// protwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        resolve('user two ceated') 
//     },2000);
// })
// prothree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        resolve('user three ceated') 
//     },2000);
// })
// profour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        reject('user four ceated') 
//     },2000);
// })

// Promise.race([proOne,protwo,prothree,profour])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// promise .any

proOne = new Promise(function(resolve,reject){
    setTimeout(() => {
       resolve('user one ceated') 
    },2000);
})

protwo = new Promise(function(resolve,reject){
    setTimeout(() => {
       resolve('user two ceated') 
    },2000);
})

prothree = new Promise(function(resolve,reject){
    setTimeout(() => {
       resolve('user three ceated') 
    },2000);
})

profour = new Promise(function(resolve,reject){
    setTimeout(() => {
       resolve('user four ceated') 
    },2000);
})

Promise.any([proOne,protwo,prothree,profour])
.then(function(str){
    console.log(str)
})










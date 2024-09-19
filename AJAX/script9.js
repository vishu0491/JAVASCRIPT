// Promise combinators 

// Promise combinators // parallel execution of promises
// Promise.all([])
// Promise.allSettled([])
// Promise.race([])
// Promise.any([])


// let proOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        resolve('user one ceated successfully....1') 
//     },2000);
// })

// let protwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        resolve('user two ceated successfully....2') 
//     },2000);
// })

// let prothree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        resolve('user three ceated successfully....3') 
//     },2000);
// })

// let profour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        resolve('user four ceated successfully....4') 
//     },1000);
// })

// // program one ...
// async function PromiseAll() {
// try{
//     let pro =await Promise.all([proOne,protwo,prothree,profour])
//     console.log(pro)
    
// }    
// catch{
//     console.log('error caught')
// }
// }

// PromiseAll()

// // program 2

// proOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('user created succesfully ---1')
//     }, 2000);
// })

// protwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         reject('user cretd failed')
//     }, 200);
// })

// prothree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        resolve('user cread succfully 3') 
//     },100);
// })

// profour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('user created succesfuly 4')
//     }, 1000);
// })

// async function PromiseAllsettled(){
//     let arr = await Promise.allSettled([proOne,protwo,profour,prothree])
//     console.log(arr)
// }

// PromiseAllsettled()



// // program 4 
// // promise.race() - with asnc wait function

// proOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('user one created succesfuly ')
//     }, 1000);
// })

// protwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('user two created succesfuly ')
//     }, 1000);
// })

// prothree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('user three created succesfuly')
//     }, 1000);
// })

// profour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('user created succesfuly 4')
//     }, 1000);
// })

// async function PromiseRace(){
// try{
//     let racewinner = await Promise.race([proOne,protwo,profour,prothree])
//     console.log(racewinner)
// }
// catch{
//     console.log("error caught ..")
// }

// }

// PromiseRace()

// program 4 
// Promise.Any with asnc awiat 

proOne = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('user one created succesfuly')
    }, 1000);
})

protwo = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('user two created succesfuly')
    }, 1000);
})

prothree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('user three created succesfuly')
    }, 1000);
})

profour = new Promise(function(resolve,reject){
    setTimeout(() => {
        reject('user four created succesfuly')
    }, 1000);
})

async function PromiseAny(){
    let val = await Promise.any([proOne,protwo,prothree,profour])
    console.log(val)
}

PromiseAny()











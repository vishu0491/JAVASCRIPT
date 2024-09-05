// // async   vs sync 

// function additionA(){
//     console.log("addition A")
// }

// function additionB(){
//     console.log("adition B")
// }

// additionA()
// additionB()

// function additionD(){
//     setTimeout(function(){
//         console.log("addition D")
//     },3000)
// }

// function additionE(){

// }
// additionD()
// additionE()


// function getInfo(){
//     setTimeout(function(){
//         console.log("create user")
//     })

//     setTimeout(function(){
//         console.log("ceate Id")
//     },2000)

//     setTimeout(function(){
//         console.log("get info")
//     },1000)
// }

// getInfo()


// async sync 
//async ----- -sync ------ create user --- create Id ------get info 

// program 4
// call back helll

// function getinfo(){
//     setTimeout(function(){
//         console.log("create user"),
//         setTimeout(function(){
//             console.log("create Id"),
//             setTimeout(function(){
//                 console.log("get info")
//             },1000)
//         },2000)
//     },3000)
// }

//  getInfo()

 // not reusable anf tighly coupled

let pro1 = new Promise(function(resolve,reject){
    let a = 10
    let b = 20
    if (a == b){
        resolve("Hello")
    }
    else{
        reject("bye")
    }
})

//consume
pro1.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})

// program 2

let pro2 = new Promise(function(resolve,reject){
    let firstName = "vishal"
    if(firstName.length >= 7){
        resolve([11,22,33])
    }
    else{
        reject([-11,-22,-33])
    }
})

pro2
.then(function(a){
    console.log(a[0])
},function(b){
    console.log(b[1])
})

// program 3

let pro3 = new Promise(function(resolve,reject){
    let a = 10
    let b = 100
    if (a == b){
        resolve("hello")
    }
    else{
        reject("bye")
    }

})

pro3
.then(function(str){
    console.log(str)  // jhello
})

.catch(function(str){
    console.log(str) // bye
})


let pro4 = new Promise(function(resolve,reject){
    let a = 10
    let b =100
    if (a == b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})

pro4
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will execute")
})

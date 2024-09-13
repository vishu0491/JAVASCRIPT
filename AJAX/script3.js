function additionA(){
    console.log("A")
}
function additionB(){
    console.log("B")
}
additionA()
additionB()

//program 2

// function additionC(){
//     setTimeout(() =>{
//         console.log("c")
//     },3000);
// }
// function additonD(){
//     console.log("D")
// }
// additionC()
// additonD()

//program 3

function getInfo(){
    setTimeout(function(){
        console.log("user created")
    },3000)
    setTimeout(function (){
        console.log("user id")
    },2000)
    setTimeout(function(){
        console.log("user info")
    },1000)
}

getInfo()


function getinfo(){
    setTimeout(function(){
        console.log("user created")
        setTimeout(function(){
            console.log("user id")
            setTimeout(function(){
                console.log("user info")
            },1000)
        },2000)
    },3000)
}

getInfo()

// program 4
// promise --- pending resolved reject

let pro = new Promise(function(resolve,reject){
    let a = 20
    let b = 10
    if (a == b){
        resolve('hello')
    }
    else{
        reject("bye")
    }
})


//consuming tyhe promise 
pro
.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})


let pro2 = new Promise(function(resolve,reject){
    let a = 20
    let b = 10
    if (a == b){
        resolve([11,22,31])
    }
    else{
        reject({fistName : "chinmay"})
    }
})

//consuming the promise

pro2
.then(function(a){
    console.log(a)
},function(b){
    console.log(b)
})

// program 3

let pro3 = new Promise(function(resolve,reject){
    let a = 20
    let b = 30
    if (a == b){
        resolve([11,22,31])
    }
    else{
        reject({firstName : "vishal"})
    }
})

// consumig Promise
pro3
.then(function(a){
    console.log(a)
})
.catch(function(b){
    console.log(b)
})


// program 4

let pro4 = new Promise(function(resolve,reject){
    let a = 20
    let b = 20
    if (a == b){
        resolve([11,22,31])
    }
    else{
        reject({firstName :"Tushar"})
    }
})

//consuming the Promise

pro4
.then(function(a){
    console.log(a)
})
.catch(function(b){
    console.log(b)
})
.finally(function(){
    console.log("i will always execute....")
})


// user  create ----- user id ------- user ifo 
// program 5

let pro5 = new Promise(function(resolve,reject){
    let a = 20
    let b = 30
    if (a == b){
    resolve([["NAGPUR","WARDHA"],["PUNE","MUMBAI"],["JAIPUR","UDAIPUR"]])
    }
    else{
        reject("bye")
    }
})

pro5
.then(function(s){
    console.log(s[0])
    returns[0]
})
.then(function(s){
    console.log(s[10])
    return[0]
})
.then(function(s){
    console.log(s)
})
.catch(function(b){
    console.log(b)
})
.finally(function(){
    console.log("i")
})


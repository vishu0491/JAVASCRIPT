// async  vs sync
function addA(){
    console.log("A is called")
}

function addB(){
    console.log("B is called")
}

addB()
addA()

// // program 2

// function addC(){
//     setTimeout(function(){
//         console.log("c is called")
//     },3000)
// }

// function addD(){
//     console.log("D is called")
// }

// addC()
// addD()

// program 3

function getInfo(){
    setTimeout(function(){
        console.log("user created")
    },3000)
}

setTimeout(function(){
    console.log("get Id")
},2000)

setTimeout(function(){
    console.log("get info")
},1000)

getInfo()

// program 4

function getinfo(){
    setTimeout(function(){
        console.log("user created"),
    setTimeout(function(){
        console.log("user id"),
    setTimeout(function(){
        console.log("get info")
    },1000)
    },2000)
    },3000)
}

getinfo()

// program 5 promises

// pending
// resove
// reject


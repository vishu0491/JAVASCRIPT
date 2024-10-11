// function addition(){
//console.log('add1')
//}

// function addition2(){
//console.log("add 2")
//}
//addition()
//addition2()


//program 2

function addThree(){
    setTimeout(function(){
        console.log('add3')
    },3000)
}

function addFour(){
    console.log('add4')
}

addFour()
addThree()


// program 3
// usercreation ---- user id------- userinfo 
function getinfo(){
    setTimeout(function(){
        console.log("user created")
    },3000)

    setTimeout(function(){
        console.log("getId")
    },2000)
    setTimeout(function(){

    })
}

//getinfo()

//program --- 4 async - -----synchronously execute
// call back hell
//code tightly coupled not reusable

function getinfo(){
    setTimeout(function(){
        console.log("user created")
        setTimeout(function(){
            console.log("getId")
            setTimeout(function(){
                console.log("getInfo")
            },1000)
        },2000)
    },3000)
}
getinfo()

// promises()
//asyn code ---- sync ----- without call back hell
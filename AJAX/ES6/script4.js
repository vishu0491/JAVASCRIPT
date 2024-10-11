// bind() , call() , apply()

let info ={
    firstName:"vishal",
    lastName:"jadhav",
    displayName :function(){
        console.log(this.firstName +this.lastName)
    }
}

info.displayName()

// let info2 ={
//     firstName:"Tushar",
//     lastName:"jadhav"
// }
// let info3={
//     firstName:"Ram",
//     lastName:"rao"
// }
// let info4={
//     firstName:"Jadhav",
//     lastName:"vishal"
// }

// // let display = info.displayName

// let display = function(){
//     console.log(this.firstName +this.lastName)
// }
// display = display.bind(info2)
// display()


//bind() ,call() ,apply()
// bind retun a function


info2 = {
    firstName:"mayuri",
    lastName:"rao"
}

info3 = {
    firstName:"amol",
    lastName:"rao"
}

info4 = {
    firstName:"mayuri",
    lastName:"katwe"
}


let displayFirstName = function(word){
    console.log(word +" " +this.firstName)
}
displayFirstName()
let fn = displayFirstName.bind(info2)
fn()

displayFirstName.call(info2,"good morning ..")
displayFirstName.call(info3,"good evening ....")
displayFirstName.call(info4,"good afternoon")
displayFirstName.apply(info2,["good morning"])


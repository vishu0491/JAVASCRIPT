// ternary operator 

let q = 8
let r = 10
q > r ? console.log ('q is greater'):console.log('r is greater')



let age =19
age >=18 ? console.log ("can drive"):console.log("canot drive")

let a= age >=18 ? "can drive":" cannot drive"
console.log(a)


//switch case without break

let city ="pune"
switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "kanpur":
        console.log("UP")
    case "bhopal":
        console.log("MP")
    default:
        console.log("Incorrect cit name")
}


//progam 2

let city1 ="kanpur"
switch(city1){
    case "nagapur": console.log("MH")
    break
    case "jaipur":console.log("RJ")
    break
    case "kanpur": console.log("up")
    break
    case "Bhopal": console.log ("MP")
    break
    default:
        console.log("Incorrect city name")
}

// program 3

let city2 = "jaipur"
switch(city2){
    case "nagpur":
        console.log("MH")
        break
    case "kanpur":
        console.log("UP")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "bhopal":
        console.log("MP")
        break
    default:
        console.log("Incorrect city name")
}


// program 4

let a1 = 1000
let a2 = 50000
let a3 = 30000

// if (a1>a2 && a1>a3){
//     console.log ("a1 is greater")
// }
// else if(a2 >a1 && a2 >a3){
//     console.log("a2 is greater")
// }
// else{
//     console.log("a3 is greater")
// }



let flag = true
switch (flag){
    case a1 >a2 && a1 >a3:
        console.log("a1 is greater")
        break
    case a2 >a1 && a2 > a3:
        console.log("a2 is greater")
        break
        default:
        console.log("a3 is greater")

}
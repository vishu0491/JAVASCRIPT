// // rest operator
// function addAll(...arr){
//     console.log(arr)
//     return arr.reduce(function(acc,el){
//         return el + acc
//     },0)


// let q = addAll(1,2,3,4,5,6,7,6,8,7)
// console.log(q)

 ///1,2,3,4,5,6,7,3,4,5,6,7,5 ====>[1,2,3,4,5,67,3,4,5,6,7,8,9,5]

 // program 2

 // spred oprator 
 // [11,22,33,44,55,66,77,88,99]===>; 11

//  let numbers = [11,22,33,44,55,66,77,88,99]
//  function addfirstFive(a,b,c,d,e){
//     console.log(a+b+c+d+e)
//  }

//  addfirstFive(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4])
//  addfirstFive(...numbers)

// // program 3

let numbersB = [11,22,33,44,55]
//[...numbers] ====> 11,22,33,44,55
console.log(numbersB)

 function addfirstthree(a,b,c,...d){
      console.log(a)
      console.log(b)
      console.log(c)
      console.log(d)
 }

 addfirstthree(...numbersB)

// program 4


let n =[11,22,33]
let m = n 
n[0] = 111
console.log(m)
console.log(n)


const person ={
    name:"John",
    lastName:"Deer"

}
let info = {
    city:"Pune"
}
let infoUpadate = {...person,...info}

let arryA =[11,22,33]
let arryB =[34,44,55]
let arryC =[...arryA,...arryB]
console.log(arryC)

// program 2 rest

let infoC ={
    firstname:"vishal",
    lastName:"jadhav",
    age:23,
    rolNo:23
}

let {firstname,...otherinfo}=infoC
console.log(firstname)
console.log(otherinfo)


let names = ['chinamy',"shirish","shradhaa","rohit"]
let [a,...b]= names
console.log(a)
console.log(b)

// program 3
// rset and spread opreator with object using function

let infoW ={
    firstName:"vishal",
    lastName:"jadhav",
    age:23,
    rollNo:2123,
    city:"pune"
}

function displayfullName({firstName,lastName,...info}){
    console.log(firstName)
    console.log(lastName)
    console.log(info)
}
displayfullName(infoW)

// take away ------>
// copy --- array or copy -----> seprate memory 

//program 7
// short circuiting in js 


// && 

// falsy value => null,  undefined , "", 0,23>3 ,NaN

let isLoggedIn = false 
let user ={name:"vishal"}
let val = isLoggedIn && user.name
console.log(val)


let isLoggedIn2 = true
let user2 = {name:"vishal"}
let val2 = 2 >3 && 0
let val3 = null && 0
let val4 = undefined && 0
let val5 = '' && "bye"
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)

// let val2 = isLoggedIn && user.name
// console.log(val2)

if (NaN){
    console.log("hello")

}
else{
    console.log("bye")
}




// shor circuit operator 

// falsy values  - NaN , null , undefined , 0 , 4  < 2 
// truthy values -  1 , '1' , "c" ,true , 6 > 3


// && 

let val = 6 < 2 && "chinamy"
let val2 = 0 && 'mayuri'
let val3 = null && 'vishal'
let val4 = 7 && 'ram'









console.log(val)
console.log(val2)
console.log(val3)
console.log(val4)


//   ||   

let val5 = 0 || 4 < 2
let val6 = 3>2 || 4 <2
let val7 = '' || 4 < 2

console.log(val5)
console.log(val6)
console.log(val7)


// null coalescing  
// 0 --------> vslid value 
let q1 = 0
let t = q1 || "samay"
console.log(t)

// if (q1>= 0){
//     console.log("hello")
// }

// null undefined 
let t2 = '' ??  "chinamy"
console.log(t2)



// optional parameter 

let info = {
    firstName : "chinamy",
    lastName :"deshpande",
    parent:{
        firstName:"kanchan",
        lastName:"deshpande"
    }
    ,
    father:"deshpamde"
}

// TypeError : cannot read properties of undefined (reading 'mother)
console.log(info.parent?.lastName)


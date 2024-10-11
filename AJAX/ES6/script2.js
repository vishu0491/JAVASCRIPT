// FALSY  ========> UNDEFINED : NULL , 0, "" ,NaN , 8>9
//truhy ==========> [],{} ,5 >3 , true , " " , "a"



if (null){
    console.log("hello")
}
else{
    console.log("bye")
}

// short circuit 
//&& 
let val = 3 > 2 && 5 == 6
console.log(val)

let val2 = "chinamy" && 3 + 3 
console.log(val2)

let val3 = 12+undefined && 3+3
console.log(val3)

let val4 = 12+12 && 3+3
console.log(val4)

let val5 = "chinamy"&& 7 <8
console.log(val5)


let index = 0 
let val6 = 0 && "chinamy"
console.log(val6)

if (index == 0 ){
    console.log("chinamy")
}

// or

let val8 = "deshpande " || "chinamy"

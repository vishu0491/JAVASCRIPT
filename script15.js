// map()

let birthYear =[1989,1990,1991,1992]
//[35,34,33,32]
//

let newArr = birthYear .map(function(el,index,arr){
    return 2024 -el
})

console.log(newArr)


let numbers =[11,22,33,44,55]
let newArrB = numbers.map(function(el){
    return el + 10 
})

console.log(newArrB)


//filter

let transaction = [123, -100,44,55,66,76,-89,-88]
let newArrC = transaction.filter(function(el){
    return el > 0
})

console.log(newArrC)

let newArrD = transaction.filter(function(el){
    return el < 0
})

console.log(newArrD)


let marks = [189,77,190,200,123,156,178]
let newArrE = marks.filter(function(el){
    return el > 150
})

console.log(newArrE)

// reduce

let arr = [11,22,33]
let newArrF = arr.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(newArrF)

 // forEach

 let cities = ["banglore","pune","chennai","lahore"]
cities.forEach(function(el,index,arr){
    console.log('welcome'+ el)
})

// find()

//  
let markB =[44,55,66,33,44,55,66,77,88]
let above50 = markB.filter(function(el,index,arr){
    return el >50
})

console.log(above50)


let above50First = markB.find(function(el,index,arr){
    return el > 50
})

// findIndex()
let above50FirstIndex =markB.findIndex(function(el,index,arr){
    return el > 50
})

console.log(above50FirstIndex)


// every()

let numbersB = [33,44,55,66,33,22]
let q1 = numbersB.every(function(el,index,arr){
    return el > 50
})
console.log(q1)


// some
let q2 = numbersB.some(function(el){
    return el > 50
})

console.log(q2)




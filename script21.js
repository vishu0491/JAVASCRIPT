// map() , filter() , reduce(), forEach()
// find() , findIndex() , every(), some()

// program 1
//                0     1   2    3
let birthYear = [1989,1990,1991,1992]
//

let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024-el
})

console.log(q1)

let numbers = [11,22,33,44,55]
let q2 = numbers.map(function(el,index,arr){
    //console.log(numbers)
    return el + 10
})
console.log(q2)

// program 2
// filter

let marks = [33,44,56,65,77,88,90]
let q3 = marks.filter(function(el,index,arr){
    //console.log (marks)
    return el >50
})

console.log(q3)

// program 3

let transaction = [-900,1000,5000,3000,4500,-500]
let deposit = transaction.filter(function(el,index,arr){
   // console.log(transaction)
   return el > 0
})
console.log(deposit)

let withdrawl = transaction.filter(function(el,index,arr){
    return el < 0
})

console.log(withdrawl)

// program 4
// reduce()

let numbersA = [11,22,33]
numbersA.reduce(function(el,index,arr){
    return acc + el

},0)
console.log(numbersA)

//map() , filter(), reduce(), forEach()


// find 

let marksN = [12,25,55,78,45,44,2,455,1,555,415]
marksN.filter(function(el,index,arr){
    return el >50
})

console.log(marksN)



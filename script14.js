// 
let birthYear = [1989,1990,1991,1992]
let ages =[]
//[35,34,33,32]


for (let i = 0 ;i < birthYear ; i++){
    console.log(i)
    console.log(birthYear[i])
    console.log(2024-birthYear[i])
    let a = 2024 -birthYear[i]
    ages.push(a)

}

console.log(ages)

birthYear =[1989,1990,1991,1992]
let q1 = birthYear.map(function(el,index,arr){
    console.log(el,index,arr)
    return 2024-el
})

console.log(q1)

// program 2

let number =[11,22,33,44]
// [13,24,35,46]
let q2 = number.map(function(el,index,arr){
    return  el + 2 })
console.log(q2)


// program 3

let numberB = [55,66,77,33,44,55,66]
let above50 =[]
for (i = 0 ; i < numberB.length ;i++)
    {
        console.log(i)
        console.log(numberB[i])
        if (numberB[i] > 50){
            above50.push(numberB[i])
        }
    }

    console.log(above50)

    numberB = [55,66,77,33,44,55,66]
    let q22 = numberB.filter(function(el,index,arr){
        return el > 50
    })

    console.log(q22)

let numberC = [11,33,44,55,22,33,55,66,77]
let q33 = numberC.filter(function(el,index,arr){
    return el % 2 == 0
})

console.log(q33)

// program 3

let numbersC = [11,22,33]
let total = 0

for (let i = 0 ; i < numbersC.length ; i++)
    {
        console.log(i)
        console.log(numbersC[i])
        total = total + numbersC[i]
    }

    console.log(total)











// array 

//reverse()

let names = ["chinamy","amit","raj","ramesh"]
let q = names.reverse()
console.log(q)
console.log(names)

let names2=names.sort()
console.log(names2)



// join

let info = ["chinmay","shirish",7771155]
let e = info.join("@")
console.log(e)

// concat

let a = [55,66,77]
let b = [88,5,6,55,45]
let c= b.concat(a)
console.log(c)


// slice        0       1        2       3       4         5
 let cities =["pune","jaipur","mumbai","surat","nagpur","chennai"]
//   //          -6        -5       -4       -3      -2      -1               
console.log(cities.slice(1,2))
console.log(cities.slice(2,3))
console.log(cities.slice(-6))
console.log(cities.slice(0))
console.log(cities.slice(1,-2))  //// start index upto end index not inculed 
console.log(cities.slice(0,5))
console.log(cities.slice(-5,5))
console.log(cities.slice(-4,4))


//              0       1          2         3
let citiesB = ["pune","mumbai","banglore","kolkata"]
citiesB.pop()
citiesB.shift()
console.log(citiesB)



//splice
//            0       1       2        3        4       5
// let store =["pen","pencil","mobile","rubber","mouse","shopner"]
// //            -6     -5      -4      -3       -2        -1
// let 
// store.pop()

// flat           0       1       2
//              0  1    0  1    0  1
let numbers =[[11,22],[33,44],[55,66]]
console.log(numbers[0][0])
console.log(numbers[0][1])
console.log(numbers[1][0])
console.log(numbers[1][1])

let q1 =numbers.flat()
console.log(q1)











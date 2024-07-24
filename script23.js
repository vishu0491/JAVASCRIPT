//Map

let birthYear =[1989,1996,1992]

let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return el - 10
})
console.log(q1)

// program 1
// join

let info =["chinamy","deshpande","77724654431"]
let a = info.join('-')
console.log(a)

let b = info.join('@')
console.log(b)

// concat()
let n1 = [11,22,33]
let n2 = [33,44,55]
let c =n1.concat(n2)
console.log(c)

// slice 
// slice (startindex,endindex(not include))
//            0          1       2       3       4         5       6
let names=["vishal","chinamy","sumit","amol","harshal","tushar","ram"]
//           -7          -6      -5       -4      -3      -2      -1       
e = names.slice(2)
console.log(e)

console.log(names.slice(1,5))
console.log(names.slice(2,3))
console.log(names.slice(-5))
console.log(names.slice(-5,-1))
console.log(names.slice(-5,4))
console.log(names.slice(-1,-5))



// splice
//                 0      1        2       3      4     5  
let countries =["india","USA","srilanka","aus","bang","pak"]
///                -6     -5      -4       -3     -2    -1  

// countries.pop()
// console.log(countries)  // remove last element 

// let z = countries.push("pak")// used for add last element 
// console.log(z) // this will print index of Added last element 
// console.log(countries) // print- [ 'india', 'USA', 'srilanka', 'aus', 'bang', 'pak' ]

// countries.shift()  // remove Fisrt Element from Ary 
// console.log(countries) // print update arry [ 'USA', 'srilanka', 'aus', 'bang', 'pak' ]

// countries.splice(1,4)  // used for to remove internal elemet from arry 
// console.log(countries) // print [ 'india', 'pak' ]

countries.splice(1,2,"china","cuba")  // we can ad for index 1 on 2 element chona and cuba
console.log(countries)


// flat()
//                    0                    1                    2
//              0          1          0         1          0        1
let state = [["nagpur","mumbai"],["kanpur","lauknow"],["jaipur","udipur"]]
console.log(state[0])
console.log(state[1][1])
console.log(state[2][1])

let f = state.flat()
console.log(f)
console.log(state)  // use for arry seprate show dormate  print - below 
// [
//     [ 'nagpur', 'mumbai' ],
//     [ 'kanpur', 'lauknow' ],
//     [ 'jaipur', 'udipur' ]
//   ]


//index of // at

//
let number = [11,22,33,44]
console.log(number.at(2))   // at is uded for know index of element which is an arry
console.log(number.indexOf(33))
console.log(number.indexOf(64))

// reverse()

let country = ["india","srilanka","bangladesh","chaina","pak"]
console.log(country.reverse())


// sort
countries.sort()
console.log(countries)


// fill
// fill("filled value",stat index,endindex(not included))

let numbersN=[11,22,33,44,,56,66,77,88]
let h= numbersN.fill(undefined,1,5)
//console.log(numbersN)
console.log(h)



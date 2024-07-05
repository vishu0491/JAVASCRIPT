let info =["chinamy","deshpande",4741111551221,15,22]
console.log(info)

// retrive
console.log(info[0])
//update
info[0] ="snehal"
console.log(info)

// add
info.push("pune")
info.unshift("Mr")

//delete
info.pop()
info.shift()

console.log(info)

// program 2

info2 =["amol",'rao','pune',23,45]

info2 = {
    //"key":value
    //"property:value"
    firstName:"amol",
    lastName:"rao",
    city:"pune",
    age:23,
    rollNo:45

}
//
console.log(info2[0])

// retrive
// dot notation and bracket notation 
console.log(info2.firstName)
console.log(info2['firstName'])

// update
// dot notation and bracket notation
info2.firstName ="snehal"
info2['age'] = 34
console.log(info2)

// add
// dot notation and bracket notation 
info2.language ="marathi"
info2['country'] = "india"
console.log(info2)


// delete
// dot notation and bracket notation

delete info2.firstName
delete info2['firstName']

// 

//<p id ="one" class = "two" name ="nm">para </p>

// selecting the element

//css

//tagname

let para = document.querySelector('p')
console.log(para)

//by Id
let byId = document.querySelector('#onee')
console.log(byId)

//className
let byClassname = document.querySelector(".two")
console.log(byClassname)

//attribute
//tagname[attribute ="value"]
let byAtt = document.querySelector('p[name="nm"]')
console.log(byAtt)
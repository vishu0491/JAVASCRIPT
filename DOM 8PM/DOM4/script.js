// h2 id = "two" class = "three" name = "four" >Learning</h2>

// slecting the element

let bytagName = document.querySelector('h2')
console.log(bytagName)


let byClass = document.querySelector('three')
console.log(byClass)

let byId = document.querySelector('#two')
console.log(byId)

//tagName[att='val]
let byAttr = document.querySelector(h2['name="four"'])
console.log(byAttr)

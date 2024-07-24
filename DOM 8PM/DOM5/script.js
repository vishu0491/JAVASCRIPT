// <h1 id ="one" class ="two" name="three">vishal<h1/>


let bytagName = document.querySelector("h1")
let byId = document.querySelector("one")
let byClass = document.querySelector("two")
let byName = document.querySelector("three")


console.log(bytagName)
console.log(byId)
console.log(byClass)
console.log(byName)


// updating name 
// console.log(byName.textContent)
// byName.textContent="Tanmay"

//updating name on user action 

byClass.addEventListener('click',function(){
    byClass.textContent = "Jadhav"
})

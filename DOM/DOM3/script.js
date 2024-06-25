// javascript 

//<h1 id ="one" class ="two" name ="nm">Hello</h1>
//Css Selector 

// by tagname
let byTagName = document.querySelector('h1')
console.log(byTagName)

// by className
let byClassName = document.querySelector('two')
console.log(byClassname)

//byId
let byId =document.querySelector('#one')
console.log(byId)

//byAttribute
// tagName[attr=value]

let byName = document.querySelector('h1[name="nm"]')
console.log(byName)

byName.addEventListener('click',function(){
    byName.style.color ='red'
   byName.style.backgroundcolor ='yellow'
})

let info = {
    firstName:"Chinamay",
    lastName :"deshpande",
    parent:{
        mother:"kanchan eshpande",
        father:"shirish deshpande"
    }
}
info.parent.mother ="kanchan s deshpande"


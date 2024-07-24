let headOne = document.querySelector('h1')
let buttonC = document.querySelector('button')

console.log(headOne)
console.log(buttonC)

buttonC.addEventListener('click',function(){
    headOne.textContent ="Jadhav"
    headOne.style.color ="red"
    headOne.style.background ="green"
})



let info = {
    fullName:"Vishal",
    parent:{
        mother :"Sangita Jadhav",
        father : "Arun jadhav"
    }
}

info.parent.mother = "Sangita a jadhav"
info['parent']['mother']= "sangita a jadhav"
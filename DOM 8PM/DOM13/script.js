let inputT = document.querySelector('input')
let buttonT = document.querySelector('button')
let ulList = document.querySelector('ul')



console.log(inputT)
console.log(buttonT)
console.log(ulList)


buttonT.addEventListener('click',function(){
    let fruitText = inputT.value
    let newLi = document.createElement('li')
    newLi.textContent = fruitText
    ulList.appendChild(newLi)
    inputT.value =""
})
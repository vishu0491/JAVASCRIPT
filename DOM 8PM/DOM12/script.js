let inputT = document.querySelector('input')
let ulList = document.querySelector('ul')
let buttonA = document.querySelector('button')


buttonA.addEventListener('click',function(){
    let fruitN = inputT.value
    let newE = document.querySelector('li')
    newE.textContent = fruitN
    ulList.appendChild(newE)
    inputT.value =""
})
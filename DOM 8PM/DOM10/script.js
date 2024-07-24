let headOne = document.querySelector('h1')
let buttonA = document.querySelector('button')


//<h1>Vishal</h1>

buttonA.addEventListener('click',function(){
    headOne.style.color="green"
    headOne.style.background ="yellow"
    headOne.textContent = headOne.textContent.toUpperCase()
})


let ulList = document.querySelector('ul')
let inputE= document.querySelector('input')
let buttonOne = document.querySelector('#one')

console.log(ulList)
console.log(inputE)
console.log(buttonOne)

buttonOne.addEventListener('click',function(){
    let fruitText = inputE.value
    let newLi =document.createElement('li')
    newLi.textContent=fruitText
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputE.value =""
})

ulList.addEventListener('click',function(event){
    // console.log(evenet.target)
    // console.log(evenet.target.tagName)
    // console.log(evenet.target.className)

    if(event.target.tagName == "BUTTON"){
        if(event.target.className == "remove"){

        }
        else if(event.target.className == "up"){

        }
        else if (event.target.className == "down"){
            
        }
    }

})



function createButtons(li){
    let r =document.createElement('Button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u = document.createElement('Button')
    u.textContent ="Up"
    u.classList.add('up')
    li.appendChild(u)


    let d= document.createElement('Button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)
}




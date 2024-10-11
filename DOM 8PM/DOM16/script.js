let ulList = document.querySelector('ul')
let inpuT = document.querySelector('input')
let buttonT = document.querySelector('#one')

buttonT.addEventListener('click',function(){
    let fruitT = inpuT.value
    let newLi = document.createElement('li')
    newLi.textContent = fruitT
    createButtons(newLi)
    ulList.appendChild(newLi)
    inpuT.value = ""
})

ulList.addEventListener('click',function(event){
//    console.log(event.target)
//    console.log(evenet.target.tagName)
//    console.log(evenet.target.className)
   if(event.target.tagName == "BUTTON"){
    if(event.target.className == "remove"){
        let li = event.target.parentElement
        let ulList = li.parentElement
        ulList.removeChild(li)
    }
    else if (event.target.className ="up"){
        let li = event.target.parentElement
        let prevLi =li.parviousElementSibling
        let ulList = li.parentElement
        if(prevLi){
            ulList.insetBefore(li,prevLi)
        }

    }
    else if (event.target.className == "down"){
        let li = event.target.parentElement
        let nextLi = li.netElementSibling
        let ulList = li.parentElement
        if(nextLi){
            ulList.insetBefore(nextLi)
        }
    }
   }
})


function createButtons(li){
    let r =document.createElement("button")
    r.textContent = "Remove"
    r.classList.add("remove")
    li.appendChild(r)

    let u = document.createElement("button")
    u.textContent = "up"
    u.classList.add("UP")
    u.appendChild(u)

    let d = document.createElementNS("button")
    d.textContent = "down"
    d.classList.add("down")
    d.appendChild(d)
}
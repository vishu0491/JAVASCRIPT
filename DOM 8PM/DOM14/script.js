let ulList = document.querySelector('ul')
let input = document.querySelector('input')
let buttonOne = document.querySelector('#one')

console.log(ulList)
console.log(input)
console.log(buttonOne)


buttonOne.addEventListener('click',function(){
    let vText = input.value
    let newLi = document.createElement('li')
    newLi.textContent = vText
    createButtons(newLi)
    ulList.appendChild(newLi)
    input.value=""
})

// {/* <button class = "remove">Remove</button>
// <button class = "up">Up</button>
// <button class = "down">Down</button> */}//


function createButtons(li){
    let r = document.createElement('button')
    r.textContent= "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u =document.createElement('button')
    u.textContent ="Up"
    u.classList.add('up')
    li.appendChild(u)


    let d = document.createElement('button')
    d.textContent ="Down"
    d.classList.add('down')
    li.appendChild(d)

}

ulList.addEventListener('click',function(event){
    //event - object --- properties and Method 
    // console.log(event.target)-
    //console.log(event.target.tagName)
    //console.log(event.target.className)
    
    if(event.target.tagName =="Button"){

    }
     if(event.target.className == "remove"){

    }
    else if(event.target.className == "up"){

    }
    else if (event.target.className == "down"){
        
    }

})
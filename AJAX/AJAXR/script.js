// async vs sync 

// function additionA(){
//     console.log('A')
// }

// function additionB(){
//     console.log('B')
// }

// additionA()
// additionB()

// function additionC(){
//   setTimeout(function(){
//     console.log("c")
//   },2000)
// }
// function additionD(){
//     console.log("D")
// }

// additionC()
// additionD()


// program 3
// async  ----- sync

// function getinfo(){
//     setTimeout(function(){
//         console.log('user created')
//     },300)

//     setTimeout(function(){
//         console.log("get id")
//     },2000)

//     setTimeout(function(){
//         console.log("get info")
//     },1000)
// }

// getinfo()


// function getinfo(){
//     setTimeout(function(){
//         console.log("user create")
//         setTimeout(function(){
//             console.log("get id")
//             setTimeout(function(){
//                 console.log("get info")
//             },1000)
//         },2000)
//     },3000)
    
// }


//getinfo()


// program 1

//promise

// let pro = new Promise(function(resolve,reject){
//     let a = 10 
//     let b = 10
//     if (a == b){
//         resolve("hello")
    
//     }
//     else{
//         reject("bye")
//     }

// })

// //program 1
// pro
// .then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program 2
//  pro
//  .then(function(str){
//     console.log(str)
//  })
//  .catch(function(str){
//     console.log(str)
//  })

// program 4

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i Will always execute")
// })



// program 5.

// pro 
// .then(function(str){
//     console.log(str)
//     return"hello"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// .finally(function(){
//     console.log("i will always execute")
// })


// function createUser(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('user created')
//         },3000)
//     })
// }

// function getId(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('get Id')
//         },2000)
//     })
// }

// function getInfo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('get info')
//         },1000)
//     })
// }


// createUser()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })

//3 rd type of consiming promise 
//  async function getUsers(){
//     let q1 = await createUser()
//     console.log(q1)
//     let q2 = await getId()
//     console.log(q2)
//     let q3 = await getInfo()
//     console.log(q3)
// }

// getUsers()

// let students = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }

// students.data.forEach(function(el){
//     document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
//     document.write(`<h2>${el.email}</h2>`)
//     document.write(`<img src =${el.avatar}>`)
// })

///////////////////////////////
// function getUserPageWise(page){
//     return fetch (`https://reqres.in/api/users?page=${page}`)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(response){
//         return response.data[0].id
//     })
// }

// function getSinglUser(id){
//     return fetch(`https://reqres.in/api/users/${id}`)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(response){
//         return response.data
//     })
// }

// function renderHtml(el){
//     // document.write(`<h1>${el.first_name} ${el.last_name}</h1>`)
//     // document.write(`<p>${el.email}</p>`)
//     // document.write(`<img src =${el.avatar}>`)
//     document.write(`<h1>${el.first_name} ${el.last_name}</h1>`)
//     document.write(`<p> ${el.email}</p>`)
//     document.write(`<img src=${el.avatar}>`)
// }

// getUserPageWise()
// .then(function(id){
//     return getSinglUser(id)
// })
// .then(function(el){
//     renderHtml(el)
// })


function getUsersPageWise(page) {
    return fetch(`https://reqres.in/api/users?page=${page}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data[0].id
        })
}

function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })
}

function renderHtml(el) {
    document.write(`<h1>${el.first_name} ${el.last_name}</h1>`)
    document.write(`<p> ${el.email}</p>`)
    document.write(`<img src=${el.avatar}>`)
}

// getUsersPageWise(1)
// .then(function(id){
//     return getSingleUser(id)
// })
// .then(function(el){
//     renderHtml(el)
// })

async function getSingleUsers(page){
    let id = await getUsersPageWise(page)
    console.log(id)
    let el = await getSingleUser(id)
    renderHtml(el)
}
getSingleUsers(1)
let div = document.querySelector('.fetch-about')
let data = []

fetch('https://jsonplaceholder.typicode.com/posts')
.then(rslt => rslt.json())
.then(deta => data = deta)
.then( ()=>{
    data.forEach( elem =>{
        let li = document.createElement('div')
        li.classList.add('col-4' , 'border')
        li.innerText = elem.title
        div.appendChild(li)
    })
})
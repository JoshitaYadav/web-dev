let list = document.querySelector('.movie-list');
console.log(list)

//a better practice than the asynchroonous method
list.innerHTML+= '<li>venom the last dance</li>'

let listitem= document.createElement('li')

listitem.innerText= "hulk";
listitem.classList.add('movie-item')

setTimeout(()=>{
    list.appendChild(listitem) //asynchrously
},2000)
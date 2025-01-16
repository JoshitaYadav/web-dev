//mouse events

// document.querySelector('body').addEventListener('click',(event)=>{
//     let target= event.target
//     target.style.color='green'
// })
// document.querySelector('body').addEventListener('click',(event)=>{
//     let target= event.target
//     target.style.color='blue'
// })
// document.querySelector('p').addEventListener('mouseover',(event)=>{
//     alert('welcome to my website')
// })
// document.querySelector('h1').addEventListener('mouseout',(event)=>{
//     alert('welcome to my website')
// })

// document.querySelector('body').addEventListener('mousemove',(event)=>{
//     console.log(event.target)
// })

//keyboard event
// document.querySelector('body').addEventListener('keydown',(event)=>{
//     console.log(event)
// })
// document.querySelector('body').addEventListener('keyup',(event)=>{
//     console.log(event)
// })
// document.querySelector('body').addEventListener('keypress',(event)=>{
//     console.log(event)
// })

//WINDOW events

let body = document.querySelector('body')

window.addEventListener('scroll',(event)=>{
    let xposition = window.scrollX;
    let yposition = window.scrollY;

    if (yposition>window.innerHeight){
        body.classList.toggle('dark')
    }
    
})

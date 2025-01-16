document.addEventListener('DOMContentLoaded', () => {

    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const filterButtons = document.querySelectorAll('.filter-buttons button')
    const clearCompletedButton = document.getElementById('claer-completed');

    let tasks = JSON.parse(localStorage.getItem('tasks'))|| []

    taskForm.addEventListener('submit', addtask)

    function saveTasks(){
        localStorage.setItem('item',JSON.stringify(tasks))
    }
    function addtask(event){
        event.preventDefault()
        const task = taskInput.value.trim()

        tasks.push({
            text:task,
            completed: false
        })
        saveTasks()
        taskInput.value=''
        renderTasks()
    }

    function renderTasks(){
        taskList.innerHTML= '';

        tasks.forEach((task, index)=>{
            const li = document.createElement('li')

            li.innerHTML = `
            <span>${task.text}</span>
            <div>
                 <button class= "completed-button">${task.completed?"undo ":"complete"}</button>
                 <button class = "edit-button"> edit</button>
                 <button class = "delete-button">delete</button>
            </div>
            `
            li.className= `task-item"${task.completed?'completed':''}`

            const deleteButton = li.querySelector(".delete-button")
            const editButton = li.querySelector(".edit-button")
            const completeButton = li.querySelector(".complete-button")

            deleteButton.addEventListener('click',()=>{deleteTask(index)})
            editButton.addEventListener('click',()=>{editTask(li,index)})
            completeButton.addEventListener('click',()=>{completeTask(index)})

            taskList.appendChild(li)
        })

    }
    
    function deleteTask(index){
        tasks.splice(index,1)
        saveTasks()
        renderTasks()
    }

    function editTask(li,index){

        const span = li.firstElement('input')
        input.type = 'text'
        input.value= tasks[index].text
        input.focus()
        li.replaceChild(input,span)

        if (input.value){
            input.addEventListener('blur',()=>{
                tasks[index].text= input.value
                renderTasks()
            })
        }

    }
    function completeTask(index){
        tasks[index].completed=!tasks[index].completed
        saveTasks()
        renderTasks()
    }

    document.querySelector('.filter-buttons').addEventListener('click',(event)=>{

        const id= event.target.getAttribute('id')
        const status = id.split('-').pop()

        filterButtons.forEach((item)=>{
            const itemId = item.id.split('-',pop());
            if (itemId=== status){
                item.classList.add('active')
            }
            else if (item!==status){
                item.classList.remove('active')
            }

        })
        if(status==='active'){
            let newtasks = tasks.filter(task=>task.cokmpleted===false)
            renderTasks(newtasks)

        }
        if(status==='completed'){
            let newtasks = tasks.filter(task=>task.completed===true)
            renderTasks(newtasks)
        }
        if(status==='all'){
            renderTasks()
        }
    })

    clearCompletedButton.addEventListener('click',()=>{
        console.log('clicked')
        tasks = tasks.filter(task => !task.completed);
        saveTasks();
        renderTasks();
    })

})